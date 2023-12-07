import { Archivo } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';
import { TPH_WEBSITE_URL } from '@/constants/tph';

const archivo = Archivo({ subsets: ['latin'], display: 'swap' });

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

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${archivo.className} bg-app-bg text-white`}>
				{children}
			</body>
		</html>
	);
}
