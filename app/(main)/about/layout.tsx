/**
 * About Layout
 */

// Dependencies
import { TPH_WEBSITE_URL } from '@/constants/tph';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About | TPH x SRMIST',
	description:
		'Welcome to TPHXSRM, the Product House SRM Web3 Club. We are a community of tech enthusiasts who explore and innovate in the field of Web3 and blockchain.',
	openGraph: {
		type: 'website',
		title: 'About | TPH x SRMIST',
		description:
			'Welcome to TPHXSRM, the Product House SRM Web3 Club. We are a community of tech enthusiasts who explore and innovate in the field of Web3 and blockchain.',
		url: `${TPH_WEBSITE_URL}/about`,
	},
	twitter: {
		title: 'About | TPH x SRMIST',
		description:
			'Welcome to TPHXSRM, the Product House SRM Web3 Club. We are a community of tech enthusiasts who explore and innovate in the field of Web3 and blockchain.',
	},
};

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
