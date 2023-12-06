/**
 * Terms and Conditions Layout
 */

// Dependencies
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Terms & Conditions | TPH x SRMIST',
	description: '',
};

export default function TermsAndConditionsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
