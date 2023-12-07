/**
 * Hero Component - Blogs Page
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
						Blogs
					</h1>
					<p className='text-base md:text-lg lg:text-xl mt-4'>
						Dive into the realm of insights and knowledge at
						TPHxSRMIST. Our featured blogs cover a spectrum of
						topics, offering valuable perspectives on the
						ever-evolving world of technology.
					</p>
					<p className='text-base md:text-lg lg:text-xl mt-4'>
						Explore intriguing articles, stay informed, and indulge
						your curiosity. Join us on a journey of continuous
						learning through our carefully curated selection of
						blogs.
					</p>
					<Button
						asChild
						className='bg-app-primary hover:bg-app-primary/80 transition-all duration-300 mt-8 w-full rounded-2xl'
					>
						<Link href={'/blogs#blogs'}>Explore blogs</Link>
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
