import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contact | TPH x SRMIST',
	description: '',
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
