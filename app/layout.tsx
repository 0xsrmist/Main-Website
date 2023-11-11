import { Archivo } from 'next/font/google';
import './globals.css';

const archivo = Archivo({ subsets: ['latin'], display: 'swap' });

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
