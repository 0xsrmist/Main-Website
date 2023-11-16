import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const About = () => {
	const content = [
		'Welcome to TPHxSRMIST, the forefront of innovation and exploration in the world of technology. We are The Product House SRMIST Web3 Chapter, a vibrant community dedicated to delving into the realms of Web3 technologies and blockchain innovations.',
		"Our mission is to provide a platform for curious minds and tech enthusiasts to learn, collaborate, and create. Whether you're an experienced developer or just starting your journey, TPHxSRMIST is the place where you can harness the power of decentralized applications and contribute to shaping the digital future.",
		"As a member of our club, you'll have the opportunity to engage with industry experts, work on real-world projects, and be part of a network that values innovation and growth. Join us on this exciting adventure as we pave the way for the next generation of technological advancements.",
	];

	return (
		<section className='w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-20 mx-auto p-4 md:p-16'>
			<div className='h-fit md:sticky md:top-20'>
				<Image
					src='/assets/images/landing-about.png'
					width={100}
					height={100}
					alt=''
					className='w-full h-auto object-contain'
					unoptimized
				/>
			</div>
			<div className=''>
				<h2 className='uppercase text-xl md:text-2xl lg:text-4xl leading-tight font-bold'>
					About us
				</h2>
				{content.map((text, index) => (
					<p
						key={`landing-about-text-${index}`}
						className='text-base md:text-lg lg:text-xl mt-4'
					>
						{text}
					</p>
				))}
				<Button
					asChild
					className='bg-app-primary hover:bg-app-primary/80 transition-all duration-300 mt-8 w-full rounded-2xl'
				>
					<Link href={'/about'}>Learn more</Link>
				</Button>
			</div>
		</section>
	);
};

export default About;
