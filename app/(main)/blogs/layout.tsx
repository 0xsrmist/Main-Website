import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Blogs | TPH x SRMIST',
	description: '',
};

export default function BlogsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
