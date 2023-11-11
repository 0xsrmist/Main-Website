import type { Metadata } from 'next';
import Navbar from '@/layouts/Navbar';
import Footer from '@/layouts/Footer';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotificationInfo from '@/components/resuable/Notification';

import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { activeNotificationsQuery } from '@/sanity/lib/queries';

export const metadata: Metadata = {
	title: 'TPH x SRMIST',
	description: '',
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const notifications = await sanityFetch<Notification[]>({
		query: activeNotificationsQuery,
	});

	return (
		<>
			<TooltipProvider>
				<NotificationInfo notifications={notifications} />
				<Navbar />
				{children}
				<Footer />
			</TooltipProvider>
		</>
	);
}
