/**
 * Hero Component - Team Page
 */

// Dependecies
import React from 'react';
import Image from 'next/image';

const Hero = () => {
	return (
		<section className='w-full min-h-fit relative bg-[url(/assets/images/circles.svg)] z-20 bg-no-repeat bg-center bg-cover flex flex-col items-center mt-20'>
			<h1 className='uppercase text-4xl md:text-5xl lg:text-6xl leading-tight font-bold'>
				Meet our team
			</h1>
			<div className='mt-4 max-w-[80%] md:max-w-[60%] w-full overflow-hidden rounded-2xl z-20'>
				<Image
					src={'/assets/images/team.jpg'}
					width={100}
					height={100}
					alt='tphxsrmist team'
					className='w-full h-auto object-cover aspect-video'
					priority
					unoptimized
				/>
			</div>
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
