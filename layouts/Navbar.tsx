'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
			<div className='w-full max-w-7xl mx-auto'>
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
			</div>
		</header>
	);
};

export default Navbar;
