/**
 * All Events Layout
 */

// Dependencies
import { TPH_WEBSITE_URL } from '@/constants/tph';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Events | TPH x SRMIST',
	description:
		'Explore the dynamically creative and strategically mastered ventures. From immersive blockchain experiences to engaging tech activities, our carefully curated events offer a gateway to explore the latest technologies.',
	openGraph: {
		type: 'website',
		title: 'Events | TPH x SRMIST',
		description:
			'Explore the dynamically creative and strategically mastered ventures. From immersive blockchain experiences to engaging tech activities, our carefully curated events offer a gateway to explore the latest technologies.',
		url: `${TPH_WEBSITE_URL}/events`,
	},
	twitter: {
		title: 'Events | TPH x SRMIST',
		description:
			'Explore the dynamically creative and strategically mastered ventures. From immersive blockchain experiences to engaging tech activities, our carefully curated events offer a gateway to explore the latest technologies.',
	},
};

export default function EventsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
