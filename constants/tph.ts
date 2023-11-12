// Club Constants

// Dependencies
import { Linkedin, Instagram, LucideIcon, X, Mail, Github } from 'lucide-react';

type SocialsList = ReadonlyArray<{
	name: string;
	url: string;
	Icon: LucideIcon;
}>;

export const TPH_EMAIL = 'tphsrmist@gmail.com';

export const TPH_CONTACT_NUMBERS = ['+916393221408', '+919352917041'];

export const TPH_SOCIALS: SocialsList = [
	{
		name: 'Instagram',
		url: 'https://www.instagram.com/0xsrmist/',
		Icon: Instagram,
	},
	{
		name: 'X',
		url: 'https://twitter.com/0xsrmist',
		Icon: X,
	},
	{
		name: 'LinkedIn',
		url: 'https://www.instagram.com/0xsrmist/',
		Icon: Linkedin,
	},
	{
		name: 'Github',
		url: 'https://github.com/0xsrmist',
		Icon: Github,
	},
	{
		name: 'Mail',
		url: `mailto:${TPH_EMAIL}`,
		Icon: Mail,
	},
];

export const TPH_MAIN_WEBSITE_GITHUB_REPO =
	'https://github.com/0xsrmist/Main-Website/';
