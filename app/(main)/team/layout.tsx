/**
 * All Team Members Layout
 */

// Dependencies
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Team | TPH x SRMIST',
	description: '',
};

export default function TeamLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
