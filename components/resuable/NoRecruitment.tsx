/**
 * No ongoing Recruitment Component
 */

// Dependecies
import React from 'react';
import Image from 'next/image';

const NoRecruitment = () => {
	return (
		<section className='max-w-7xl w-full p-4 md:p-16 mx-auto'>
			<div className='bg-gradient-to-r from-[#4098F8] to-[#E82BCD] p-1 rounded-2xl'>
				<div className='grid grid-cols-1 lg:grid-cols-2 bg-[#010120] rounded-xl p-4'>
					<div className='max-w-[60%] mx-auto w-full md:max-w-full'>
						<Image
							src='/assets/images/working.gif'
							width={100}
							height={100}
							alt=''
							className='w-full h-auto object-contain'
						/>
					</div>
					<div className='flex flex-col items-center justify-center text-center'>
						<h2 className='uppercase text-xl md:text-2xl lg:text-4xl leading-tight font-bold'>
							No ongoing recruitments at the moment!
						</h2>
						<p className='text-base md:text-lg lg:text-xl mt-4'>
							Currently, TPHxSRMIST is not actively recruiting.
							Stay tuned for exciting opportunities to join our
							dynamic community of tech enthusiasts and creatives.
							Follow us for updates!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NoRecruitment;
