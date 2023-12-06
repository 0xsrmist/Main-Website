/**
 * Privacy Policy Layout
 */

// Dependencies
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Privacy Policy | TPH x SRMIST',
	description: '',
};

export default function PrivacyPolicyLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
