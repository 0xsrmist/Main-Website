/**
 * Contact Layout
 */

// Dependencies
import { TPH_WEBSITE_URL } from '@/constants/tph';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact | TPH x SRMIST',
	description: 'Connect with the coolest Web3 Community.',
	openGraph: {
		type: 'website',
		title: 'Contact | TPH x SRMIST',
		description: 'Connect with the coolest Web3 Community.',
		url: `${TPH_WEBSITE_URL}/contact`,
	},
	twitter: {
		title: 'Contact | TPH x SRMIST',
		description: 'Connect with the coolest Web3 Community.',
	},
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
