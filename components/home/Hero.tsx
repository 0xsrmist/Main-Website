import React from 'react';

const Hero = () => {
	return (
		<section className='bg-[url(/assets/images/hero.webp)] bg-center min-h-screen w-full bg-cover bg-no-repeat relative'>
			<div className='absolute w-full h-full top-0 left-0'>
				<div id='stars' />
				<div id='stars2' />
				<div id='stars3' />
				<div id='stars4' />
			</div>
		</section>
	);
};

export default Hero;
