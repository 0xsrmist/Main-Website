/**
 * All Recruitments Layout
 */

// Dependencies
import { TPH_WEBSITE_URL } from '@/constants/tph';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Recruitments | TPH x SRMIST',
	description:
		"We are on the lookout for like-minded individuals who share our enthusiasm for technology and creativity. Together, let's embark on a journey of discovery, innovation, and collective growth.",
	openGraph: {
		images: ['/opengraph-image.png'],
		type: 'website',
		title: 'Recruitments | TPH x SRMIST',
		description:
			"We are on the lookout for like-minded individuals who share our enthusiasm for technology and creativity. Together, let's embark on a journey of discovery, innovation, and collective growth.",
		url: `${TPH_WEBSITE_URL}/recruitments`,
	},
	twitter: {
		images: ['/twitter-image.png'],
		title: 'Recruitments | TPH x SRMIST',
		description:
			"We are on the lookout for like-minded individuals who share our enthusiasm for technology and creativity. Together, let's embark on a journey of discovery, innovation, and collective growth.",
	},
};

export default function RecruitmentsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
