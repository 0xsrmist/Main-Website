/**
 * Terms and Conditions Layout
 */

// Dependencies
import { TPH_WEBSITE_URL } from '@/constants/tph';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Terms & Conditions | TPH x SRMIST',
	description:
		"Welcome to TPHxSRMIST's website. By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions.",
	openGraph: {
		images: ['/opengraph-image.png'],
		type: 'website',
		title: 'Terms & Conditions | TPH x SRMIST',
		description:
			"Welcome to TPHxSRMIST's website. By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions.",
		url: `${TPH_WEBSITE_URL}/terms`,
	},
	twitter: {
		images: ['/twitter-image.png'],
		title: 'Terms & Conditions | TPH x SRMIST',
		description:
			"Welcome to TPHxSRMIST's website. By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions.",
	},
};

export default function TermsAndConditionsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
