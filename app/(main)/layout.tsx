/**
 * Home Layout
 */

// Dependencies
import type { Metadata } from 'next';
import Navbar from '@/layouts/Navbar';
import Footer from '@/layouts/Footer';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotificationInfo from '@/components/resuable/Notification';

import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { activeNotificationsQuery } from '@/sanity/lib/queries';
import { TPH_WEBSITE_URL } from '@/constants/tph';

export const metadata: Metadata = {
	metadataBase: new URL(TPH_WEBSITE_URL),
	title: 'TPH x SRMIST',
	description: 'Official Website of TPH x SRMIST.',
	openGraph: {
		type: 'website',
		title: 'TPH x SRMIST | Home',
		description: 'Official Website of TPH x SRMIST.',
		url: `${TPH_WEBSITE_URL}`,
	},
	twitter: {
		title: 'TPH x SRMIST | Home',
		description: 'Official Website of TPH x SRMIST.',
		card: 'summary_large_image',
		site: '@0xsrmist',
		creator: '@0xsrmist',
	},
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const notifications = await sanityFetch<NotificationData[]>({
		query: activeNotificationsQuery,
	});

	return (
		<>
			<TooltipProvider>
				<nav className='fixed top-0 bg-transparent w-full z-50'>
					{notifications.length > 0 ? (
						<NotificationInfo notifications={notifications} />
					) : null}
					<Navbar />
				</nav>
				{children}
				<Footer />
			</TooltipProvider>
			<Toaster />
		</>
	);
}
