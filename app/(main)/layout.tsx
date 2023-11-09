import type { Metadata } from 'next';
import Navbar from '@/layouts/Navbar';
import Footer from '@/layouts/Footer';
import { TooltipProvider } from '@/components/ui/tooltip';

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
			{/* @ts-ignore */}
			<TooltipProvider>
				{/* @ts-ignore */}
				<Navbar />
				{children}
				{/* @ts-ignore */}
				<Footer />
			</TooltipProvider>
		</>
	);
}
