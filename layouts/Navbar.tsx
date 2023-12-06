'use client';
/**
 * Navbar Component
 */

// Dependecies
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NAVBAR_NAVIGATION } from '@/constants/navigation';
import { Button } from '@/components/ui/button';
import SheetNav from './SheetNav';

const Navbar = () => {
	const [header, setHeader] = useState('bg-transparent');
	const listenScrollEvent = () => {
		window.scrollY > 50
			? setHeader(
					'bg-app-bg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70'
			  )
			: setHeader('bg-transparent');
	};
	useEffect(() => {
		window.addEventListener('scroll', listenScrollEvent);
	});
	return (
		<header
			className={`${header} w-full z-50 transition-all duration-300 md:px-16 p-4`}
		>
			<div className='w-full max-w-7xl mx-auto flex items-center justify-between'>
				<Link href='/' className='w-28 md:w-40 block'>
					<Image
						src='/assets/images/logo.png'
						alt='TPHxSRMIST'
						width={100}
						height={100}
						className='w-full h-auto object-cover'
						unoptimized
					/>
				</Link>
				<ul className='hidden md:flex items-center gap-8'>
					{NAVBAR_NAVIGATION.map((item) => (
						<li key={`navbar-nav-${item.url}`}>
							<Link
								href={item.url}
								target={item.target}
								className='font-medium text-lg hover:text-app-primary transition-all duration-300'
							>
								{item.name}
							</Link>
						</li>
					))}
					<li>
						<Button
							className='font-semibold rounded-2xl'
							variant={'secondary'}
							asChild
						>
							<Link href={'/contact'}>Collab with us</Link>
						</Button>
					</li>
				</ul>
				<SheetNav />
			</div>
		</header>
	);
};

export default Navbar;
