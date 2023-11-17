'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RotateCw } from 'lucide-react';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import * as z from 'zod';
import axios from 'axios';

const ALREADY_SUBMITTED_SESSION_STORAGE_KEY =
	'0xsrmist-v2-already-submitted-contact-form';

const SERVICE_VALUES: [string, ...string[]] = [
	'Web Development',
	'App Development',
	'Design',
	'Growth',
	'Others',
];

const formSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	phone: z.string().optional(),
	message: z.string(),
	service: z.enum(SERVICE_VALUES),
});

const ContactForm = () => {
	const { toast } = useToast();
	const [submitting, setSubmitting] = useState(false);
	const [alreadySubmitted, setAlreadySubmitted] = useState(
		typeof window !== 'undefined'
			? Boolean(
					window.sessionStorage.getItem(
						ALREADY_SUBMITTED_SESSION_STORAGE_KEY
					) === 'true'
			  )
			: false
	);
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			message: '',
			phone: '',
			service: SERVICE_VALUES[0],
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			setSubmitting(true);
			if (values?.phone && values?.phone.length !== 10) {
				form.setError('phone', {
					message: 'Phone no. must be contain 10 digits',
				});
				return;
			}
			const response = await axios.post<{ message: string }>(
				'/api/contact',
				values
			);
			if (
				response.data.message === 'contact/form-submitted-succeessfully'
			) {
				toast({
					title: 'Success',
					description:
						"Contact Form Submitted Successfully! We'll get back to you soon.",
				});
				setAlreadySubmitted(true);
				if (typeof window !== 'undefined') {
					window.sessionStorage.setItem(
						ALREADY_SUBMITTED_SESSION_STORAGE_KEY,
						'true'
					);
				}
			}
		} catch (error) {
			toast({
				title: 'Error',
				description:
					'Unable to submit form at the moment, try again later.',
				variant: 'destructive',
			});
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<section className='z-20 w-full'>
			<div className='bg-app-bg max-w-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 w-full h-fit rounded-2xl p-4'>
				{alreadySubmitted ? (
					<div>
						<div className='mt-4 rounded-lg overflow-hidden text-white'>
							<Image
								src='/assets/images/landing-contact-success.svg'
								alt='Sundar Clinic - Contact Image'
								width={100}
								height={100}
								className='w-full object-contain'
								priority
								unoptimized
							/>
						</div>
						<p className='font-heading text-xl font-medium text-center mt-8'>
							Submitted successfully!
						</p>
						<p className='text-lg text-center'>
							We&apos;ll get back to you soon.
						</p>
					</div>
				) : (
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className='gap-2 h-fit flex flex-col'
						>
							<FormField
								control={form.control}
								name='service'
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											What are you interested in? *
										</FormLabel>
										<Select
											onValueChange={field.onChange}
											value={field.value}
											defaultValue={SERVICE_VALUES[0]}
											required
											disabled={submitting}
										>
											<FormControl>
												<SelectTrigger className='w-full border-slate-500 text-black'>
													<SelectValue placeholder='Select' />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{SERVICE_VALUES.map(
													(val, idx) => (
														<SelectItem
															key={`select-item-${idx}`}
															value={val}
														>
															{val}
														</SelectItem>
													)
												)}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='name'
								disabled={submitting}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Full Name *</FormLabel>
										<FormControl>
											<Input
												placeholder='John Doe'
												type='text'
												required
												{...field}
												className='text-black'
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='email'
								disabled={submitting}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email Address *</FormLabel>
										<FormControl>
											<Input
												placeholder='doe@gmail.com'
												type='email'
												required
												{...field}
												className='text-black'
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='phone'
								disabled={submitting}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Phone Number</FormLabel>
										<FormControl>
											<Input
												placeholder='9876543210'
												type='tel'
												{...field}
												className='text-black'
											/>
										</FormControl>
										<FormDescription>
											Enter your 10 digit mobile number.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='message'
								disabled={submitting}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Message *</FormLabel>
										<FormControl>
											<Textarea
												placeholder='Enter your message'
												{...field}
												required
												className='text-black'
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<p className='text-xs'>
								(*) marks as required fields
							</p>
							<Button
								type='submit'
								disabled={submitting}
								className='mt-8 gap-2 bg-app-primary hover:bg-app-primary/80 rounded-2xl'
							>
								{submitting && (
									<RotateCw
										size={16}
										className='animate-spin'
									/>
								)}
								{submitting ? 'Submitting...' : 'Submit'}
							</Button>
						</form>
					</Form>
				)}
			</div>
		</section>
	);
};

export default ContactForm;
