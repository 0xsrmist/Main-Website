import React from 'react';
import Image from 'next/image';

const Hero = () => {
	return (
		<section className='w-full min-h-[60vh] relative bg-[url(/assets/images/circles.svg)] bg-no-repeat bg-center bg-cover flex flex-col items-center mt-12'>
			<h1 className='uppercase text-xl md:text-2xl lg:text-4xl leading-tight font-bold'>
				Meet our team
			</h1>
			<div className='mt-4 max-w-[80%] md:max-w-[60%] w-full overflow-hidden rounded-2xl'>
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
		</section>
	);
};

export default Hero;
