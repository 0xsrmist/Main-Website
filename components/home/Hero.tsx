import React from 'react';
import Image from 'next/image';

const Hero = () => {
	return (
		<section className='min-h-screen relative w-full flex items-start justify-center overflow-hidden z-10'>
			<div
				className='absolute w-full h-full top-0 left-0 z-[5]'
				// id='home__hero'
			>
				<div id='stars' />
				<div id='stars2' />
				<div id='stars3' />
				<div id='stars4' />
				<div className='w-full h-full'>
					<Image
						src='/assets/images/hero.webp'
						alt=''
						width={100}
						height={100}
						className='w-full h-auto object-cover aspect-[9/16] md:aspect-auto xl:-translate-y-60'
						priority
						unoptimized
						// sizes='(max-width: 640px) 100vw, (max-width: 1440px) 100vw, 2560px'
					/>
				</div>
			</div>
			<div className='w-full max-w-7xl flex items-center justify-center text-center flex-col h-fit p-4 md:p-16 z-10'>
				<div className='w-8 md:w-16'>
					<Image
						src='/assets/images/diamond.png'
						alt=''
						width={100}
						height={100}
						className='w-full h-auto object-cover'
					/>
				</div>
				<h1 className='uppercase text-xl md:text-2xl lg:text-4xl leading-tight font-bold max-w-[20ch] mt-4'>
					The blockchain community built for students
				</h1>
				<h2 className='text-base md:text-lg lg:text-xl max-w-[32ch] mt-2'>
					0xsrmist is a community of the best talent learning, earning
					and building in crypto
				</h2>
			</div>
		</section>
	);
};

export default Hero;
