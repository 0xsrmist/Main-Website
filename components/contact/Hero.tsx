import React from 'react';
import Image from 'next/image';
import Form from './Form';

const Hero = () => {
	return (
		<section className='w-full min-h-screen relative bg-[url(/assets/images/circles.svg)] z-20 bg-no-repeat bg-center bg-cover place-items-center grid grid-cols-1 md:grid-cols-2 gap-8 mt-20'>
			<section className='z-20'>
				<h1 className='uppercase text-4xl md:text-5xl lg:text-6xl leading-tight font-bold max-w-[20ch] mt-4'>
					Connect with the coolest{' '}
					<span className='text-app-primary'>WEB3</span> Community
				</h1>
				<div className='h-fit md:sticky md:top-20 max-w-xl'>
					<Image
						src='/assets/images/contact-hero.png'
						width={100}
						height={100}
						alt=''
						className='w-full h-auto object-contain'
						unoptimized
					/>
				</div>
			</section>
			<Form />
			<div className='max-w-[8rem] md:max-w-[16rem] absolute left-0 md:left-10 -bottom-4 md:-bottom-10 animate-float w-full z-10'>
				<Image
					src={'/assets/images/organe-planet.png'}
					width={100}
					height={100}
					alt='tphxsrmist team'
					className='w-full h-auto object-cover'
					priority
					unoptimized
				/>
			</div>
			<div className='max-w-[10rem] md:max-w-xs absolute -right-16 md:-right-32 top-0 animate-float2 w-full z-10'>
				<Image
					src={'/assets/images/purple-planet.png'}
					width={100}
					height={100}
					alt='tphxsrmist team'
					className='w-full h-auto object-cover'
					priority
					unoptimized
				/>
			</div>
		</section>
	);
};

export default Hero;
