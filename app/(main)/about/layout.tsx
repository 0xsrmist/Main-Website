import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About | TPH x SRMIST',
	description: '',
};

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
