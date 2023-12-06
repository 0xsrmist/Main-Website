/**
 * Speakers Component - Events Page
 */

// Dependecies
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type SpeakersProps = React.ComponentProps<'div'> & {
	speakers: EventData['speakers'];
};

const Speakers: React.FC<SpeakersProps> = ({ speakers }) => {
	return (
		<div className='mt-8'>
			<h3 className='uppercase text-base md:text-lg lg:text-xl'>
				Speakers
			</h3>
			<ul className='mt-4 grid grid-cols-2 md:grid-cols-4 gap-4'>
				{speakers?.map((speaker, idx) => (
					<li
						key={`speaker-${idx}`}
						className='ww-full h-full block rounded-2xl text-white bg-app-primary/40 text-center hover:bg-app-primary/80 transition-all duration-300 hover:-translate-y-1'
					>
						<Link
							href={speaker.url || '#'}
							className='w-full h-full p-4 flex flex-col items-center justify-center'
						>
							<div className='w-full max-w-[8rem] rounded-2xl overflow-hidden'>
								<Image
									src={speaker.image}
									alt={speaker.alt}
									width={100}
									height={100}
									className='w-full h-auto object-cover aspect-square'
									unoptimized
								/>
							</div>
							<h4 className='capitalize text-sm md:text-base font-medium mt-auto'>
								{speaker.name}
							</h4>
							<p className='text-xs md:text-sm capitalize bg-white text-app-primary border border-slate-300 px-2 py-1 rounded-xl mt-1'>
								{speaker.role}
							</p>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Speakers;
