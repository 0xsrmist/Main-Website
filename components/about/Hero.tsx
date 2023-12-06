/**
 * Hero Component - About Page
 */

// Dependecies
import React from 'react';
import Image from 'next/image';

const Hero = () => {
	const contents = [
		'Welcome to TPHXSRM, the Product House SRM Web3 Club. We are a community of tech enthusiasts who explore and innovate in the field of Web3 and blockchain.',
		"Our mission is to offer a platform for learning, collaboration, and creation. Whether you're a novice or an expert, TPHXSRM is where you can use decentralized applications and shape the digital future.",
		"As a club member, you'll get to interact with industry experts, work on real projects, and join a network that values growth and innovation. Join us on this amazing journey as we lead the way for the next wave of technology.",
	];

	return (
		<section className='max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 p-4 md:p-16 mt-20 z-20'>
			<div className='w-full z-20'>
				<h1 className='uppercase text-4xl md:text-5xl lg:text-6xl leading-tight font-bold'>
					About us
				</h1>
				{contents.map((content, idx) => (
					<p
						key={`about-hero-content-${idx}`}
						className='text-base md:text-lg lg:text-xl mt-2'
					>
						{content}
					</p>
				))}
			</div>
			<div className='z-20 h-fit md:sticky md:top-20'>
				<div className='w-full relative z-20 h-fit'>
					<div className='max-w-xl h-fit overflow-hidden z-20'>
						<Image
							src='/assets/images/about-hero.png'
							height={100}
							width={100}
							alt='some-baba'
							className='w-full h-auto object-contain'
							unoptimized
						/>
					</div>
					<div className='bg-app-primary absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2 max-w-xl max-h-[36rem] w-full h-full blur-[100px] rounded-full -z-10' />
				</div>
			</div>
		</section>
	);
};

export default Hero;
