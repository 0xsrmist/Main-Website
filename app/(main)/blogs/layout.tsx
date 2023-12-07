/**
 * Blogs Layout
 */

// Dependencies
import { TPH_WEBSITE_URL } from '@/constants/tph';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Blogs | TPH x SRMIST',
	description:
		'Dive into the realm of insights and knowledge at TPHxSRMIST. Our featured blogs cover a spectrum of topics, offering valuable perspectives on the ever-evolving world of technology.',
	openGraph: {
		type: 'website',
		title: 'Blogs | TPH x SRMIST',
		description:
			'Dive into the realm of insights and knowledge at TPHxSRMIST. Our featured blogs cover a spectrum of topics, offering valuable perspectives on the ever-evolving world of technology.',
		url: `${TPH_WEBSITE_URL}/blogs`,
	},
	twitter: {
		title: 'Blogs | TPH x SRMIST',
		description:
			'Dive into the realm of insights and knowledge at TPHxSRMIST. Our featured blogs cover a spectrum of topics, offering valuable perspectives on the ever-evolving world of technology.',
	},
};

export default function BlogsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
