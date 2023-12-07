/**
 * All Recruitments Layout
 */

// Dependencies
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Recruitments | TPH x SRMIST',
	description: '',
};

export default function RecruitmentsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
