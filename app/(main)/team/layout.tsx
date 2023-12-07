/**
 * All Team Members Layout
 */

// Dependencies
import { TPH_WEBSITE_URL } from '@/constants/tph';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Team | TPH x SRMIST',
	description:
		"Meet our team of like-minded individuals who share our enthusiasm for technology and creativity. Together, let's embark on a journey of discovery, innovation, and collective growth.",
	openGraph: {
		type: 'website',
		title: 'Team | TPH x SRMIST',
		description:
			"Meet our team of like-minded individuals who share our enthusiasm for technology and creativity. Together, let's embark on a journey of discovery, innovation, and collective growth.",
		url: `${TPH_WEBSITE_URL}/team`,
	},
	twitter: {
		title: 'Team | TPH x SRMIST',
		description:
			"Meet our team of like-minded individuals who share our enthusiasm for technology and creativity. Together, let's embark on a journey of discovery, innovation, and collective growth.",
	},
};

export default function TeamLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
