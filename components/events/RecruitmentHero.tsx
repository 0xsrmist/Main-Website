/**
 * Hero Component - Recruitments Page
 */

// Dependecies
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Hero = () => {
	return (
		<section className='w-full relative z-20 overflow-hidden p-4 md:p-16'>
			<div className='grid grid-cols-1 gap-20 z-20 md:grid-cols-2 w-full max-w-7xl mx-auto mt-20'>
				<section>
					<h1 className='uppercase text-4xl md:text-5xl lg:text-6xl leading-tight font-bold mt-4'>
						Recruitments
					</h1>
					<p className='text-base md:text-lg lg:text-xl mt-4'>
						Welcome to TPHxSRMIST, a vibrant club fueled by the
						passion of tech enthusiasts and creatives. We are a
						community dedicated to exploring the latest
						technologies, from blockchain to diverse tech
						activities. If you&apos;re someone who loves to learn,
						collaborate, and grow, we invite you to join us.
					</p>
					<p className='text-base md:text-lg lg:text-xl mt-4'>
						We are on the lookout for like-minded individuals who
						share our enthusiasm for technology and creativity.
						Together, let&apos;s embark on a journey of discovery,
						innovation, and collective growth. Join TPHxSRMIST and
						be part of a community that thrives on the evolving
						landscape of technology.
					</p>
					<Button
						asChild
						className='bg-app-primary hover:bg-app-primary/80 transition-all duration-300 mt-8 w-full rounded-2xl'
					>
						<Link href={'/recruitments#recruitments'}>
							Explore Recruitments
						</Link>
					</Button>
				</section>

				<section className='max-w-lg h-fit'>
					<Image
						src='/assets/images/events-hero.png'
						width={100}
						height={100}
						alt=''
						className='w-full h-auto object-contain'
						unoptimized
					/>
				</section>
			</div>
			<div className='absolute top-1/3 md:-top-10 max-w-sm md:max-w-lg -z-10 -right-20 animate-float2 w-full'>
				<Image
					src='/assets/images/planet.png'
					width={100}
					height={100}
					className='w-full h-auto object-cover'
					alt=''
					unoptimized
				/>
			</div>
		</section>
	);
};

export default Hero;
