/**
 * Contact Endpoint
 */

// Dependencies
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import z from 'zod';

const RECEIVER_EMAILS = [process.env.GMAIL_EMAIL, 'zeeshan8281@gmail.com'];

const contactFormRequestSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	phone: z.string().max(10).optional(),
	service: z.string(),
	message: z.string(),
});

// Email Sender
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.GMAIL_EMAIL,
		pass: process.env.GMAIL_PASSWORD,
	},
});

// POST: /contact endpoint to send email when
// 		 someone submits contact form
export async function POST(request: Request) {
	const body = await request.json();
	const { value, status } =
		z.OK<z.infer<typeof contactFormRequestSchema>>(body);
	if (status === 'valid') {
		await transporter.sendMail({
			from: process.env.GMAIL_EMAIL,
			to: RECEIVER_EMAILS.join(', '),
			subject: `${value.name} - ${value.email} is interested in ${value.service}`,
			text: `${value.message}\nEmail: ${value.email}\nName:${value.name}\nPhone:${value.phone}\n\nThis message is sent from the websites contact form`,
		});
		return NextResponse.json({
			message: 'contact/form-submitted-succeessfully',
		});
	} else {
		return NextResponse.error();
	}
}
