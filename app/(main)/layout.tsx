import type { Metadata } from 'next';
import Navbar from '@/layouts/Navbar';
import Footer from '@/layouts/Footer';
import { TooltipProvider } from '@/components/ui/tooltip';
import Notification from '@/components/resuable/Notification';

export const metadata: Metadata = {
	title: 'TPH x SRMIST',
	description: '',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<TooltipProvider>
				<Notification />
				<Navbar />
				{children}
				<Footer />
			</TooltipProvider>
		</>
	);
}
