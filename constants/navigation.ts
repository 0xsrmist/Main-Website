// Navigation Data

interface Navdata {
	name: string;
	url: string;
	target: '_blank' | '_self';
}

type NavdataCollection = ReadonlyArray<Navdata>;

const COMMON_NAVIGATION: NavdataCollection = [
	{
		name: 'Home',
		url: '/',
		target: '_self',
	},
	{
		name: 'About',
		url: '/about',
		target: '_self',
	},
	{
		name: 'Events',
		url: '/events',
		target: '_self',
	},
	{
		name: 'Team',
		url: '/team',
		target: '_self',
	},
];

export const NAVBAR_NAVIGATION: NavdataCollection = [...COMMON_NAVIGATION];

export const FOOTER_NAVIGATION: NavdataCollection = [
	...COMMON_NAVIGATION,
	{
		name: 'FAQs',
		url: '/contact#faqs',
		target: '_self',
	},
	{
		name: 'Terms & Conditions',
		url: '/terms',
		target: '_self',
	},
	{
		name: 'Privacy Policy',
		url: '/privacy',
		target: '_self',
	},
];
