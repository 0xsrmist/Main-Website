import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Events | TPH x SRMIST',
	description: '',
};

export default function EventsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
