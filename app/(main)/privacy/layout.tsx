/**
 * Privacy Policy Layout
 */

// Dependencies
import { TPH_WEBSITE_URL } from '@/constants/tph';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Privacy Policy | TPH x SRMIST',
	description:
		'Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website or interact with us through our contact form.',
	openGraph: {
		type: 'website',
		title: 'Privacy Policy | TPH x SRMIST',
		description:
			'Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website or interact with us through our contact form.',
		url: `${TPH_WEBSITE_URL}/privacy`,
	},
	twitter: {
		title: 'Privacy Policy | TPH x SRMIST',
		description:
			'Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website or interact with us through our contact form.',
	},
};

export default function PrivacyPolicyLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
