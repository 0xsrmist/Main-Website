/**
 * Footer Component
 */

// Dependecies
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';
import {
	TPH_EMAIL,
	TPH_CONTACT_NUMBERS,
	TPH_SOCIALS,
	TPH_MAIN_WEBSITE_GITHUB_REPO,
} from '@/constants/tph';
import { FOOTER_NAVIGATION } from '@/constants/navigation';

const Footer = () => {
	return (
		<footer className='border-t border-t-white p-4 md:p-16 mt-8'>
			<section className='max-w-7xl mx-auto w-full flex md:justify-between flex-col md:flex-row gap-8 items-center md:items-start justify-center'>
				<div>
					<Link href={'/'} className='block w-60'>
						<Image
							src='/assets/images/logo.png'
							width={100}
							height={100}
							alt='TPHxSRMIST'
							className='w-full h-auto object-contain'
							unoptimized
						/>
					</Link>
					<ul className='flex mt-2 items-center gap-2 flex-wrap'>
						{TPH_SOCIALS.map((social) => (
							<li
								key={`footer-social-${social.name.toLowerCase()}`}
							>
								<Button
									asChild
									variant={'ghost'}
									size={'icon'}
									title={social.name}
									className='rounded-full'
								>
									<Link href={social.url}>
										<social.Icon />
									</Link>
								</Button>
							</li>
						))}
					</ul>
				</div>
				<div className='flex gap-8 flex-col md:flex-row'>
					<div>
						<p className='text-xl font-medium'>Explore</p>
						<ul className='grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4 place-items-start'>
							{FOOTER_NAVIGATION.map((item) => (
								<li key={`footer-nav-${item.url}`}>
									<Link
										href={item.url}
										target={item.target}
										className='hover:text-app-primary transition-all duration-300'
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<p className='text-xl font-medium'>Get in touch</p>
						<div className='mt-4 flex flex-col gap-4'>
							<Link
								href={`mailto:${TPH_EMAIL}`}
								className='flex items-center gap-2 hover:text-app-primary transition-all duration-300'
							>
								<Mail />
								{TPH_EMAIL}
							</Link>
							{TPH_CONTACT_NUMBERS.map((contact) => (
								<Link
									key={`footer-contact-${contact}`}
									href={`tel:${contact}`}
									className='flex items-center gap-2 hover:text-app-primary transition-all duration-300'
								>
									<Phone />
									{contact}
								</Link>
							))}
						</div>
					</div>
				</div>
			</section>
			<hr className='border-b border-b-slate-300/10 mx-auto max-w-7xl rounded-xl my-8' />
			<section className='max-w-7xl mx-auto w-full text-center'>
				<p className=''>
					Copyright &copy; 2023 TPH x SRMIST. Built with ❤️. Open
					source on{' '}
					<Link
						href={TPH_MAIN_WEBSITE_GITHUB_REPO}
						target='_blank'
						className='underline underline-offset-2 transition-all duration-300'
					>
						GitHub
					</Link>
					. Powered by{' '}
					<Link
						href={'https://nextjs.org/'}
						target='_blank'
						className='underline underline-offset-2 transition-all duration-300'
					>
						Next.js
					</Link>{' '}
					+{' '}
					<Link
						href={'https://tailwindcss.com/docs/installation'}
						target='_blank'
						className='underline underline-offset-2 transition-all duration-300 hover:text-blue-500'
					>
						Tailwind CSS
					</Link>{' '}
					+{' '}
					<Link
						href={'https://ui.shadcn.com/'}
						target='_blank'
						className='underline underline-offset-2 transition-all duration-300'
					>
						Shadcn-UI
					</Link>{' '}
					+{' '}
					<Link
						href={'https://www.sanity.io/'}
						target='_blank'
						className='underline underline-offset-2 transition-all duration-300 hover:text-orange-500'
					>
						Sanity
					</Link>
					.
				</p>
			</section>
		</footer>
	);
};

export default Footer;
