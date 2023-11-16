import { Container } from 'postcss';
import React from 'react';
import Image from 'next/image';
const About = () => {
  return (
    <section className='max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-0'>
      <div className='max-w-full pt-16 mt-24 ml-14'>
        <span className='font-bold font-sans' style={{ fontSize: '4rem' }}>ABOUT US</span>
      
        <p className="mt-12 md:text-[1.15rem] text-xl">
        Welcome to TPHXSRM, the Product House SRM Web3 Club. We are a community of tech enthusiasts who explore and innovate in the field of Web3 and blockchain.
        Our mission is to offer a platform for learning, collaboration, and creation.<br/> Whether you&apos;re a novice or an expert, TPHXSRM is where you can use decentralized applications and shape the digital future.
        <br/>As a club member, you&apos;ll get to interact with industry experts, work on real projects, and join a network that values growth and innovation. Join us on this amazing journey as we lead the way for the next wave of technology.
        </p>
      </div>
      <div className='h-full w-full object-cover sm:h-full md:mt-12'>
      <Image
					src='/assets/images/about-image.png'
					height={100}
					width={100}
					alt='some-baba'
					className='w-full h-auto object-contain float-right lg:w-[70%] '
					unoptimized
				/></div>
    </section>
  );
};

export default About;

