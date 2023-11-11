import React from 'react';
import InfiniteLooper from '../resuable/InfiniteLooper';
import Image from 'next/image';

type PartnersProps = React.ComponentProps<'section'> & {
	partners: Partner[];
};

const Partners: React.FC<PartnersProps> = ({ partners }) => {
	return (
		<section className='py-16 md:py-40 overflow-hidden'>
			<div className='-rotate-6 z-10 border-b border-b-white border-t border-t-white bg-app-bg'>
				<InfiniteLooper speed={50} direction='left'>
					<div className='flex gap-40 px-20 items-center'>
						{partners.map((partner) => (
							<div
								className='flex gap-40'
								key={`loop-1-${partner._id}`}
							>
								<div className='flex w-20' title={partner.name}>
									<Image
										src={partner.image}
										alt={partner.alt}
										className='w-full h-auto object-contain'
										width={70}
										height={70}
									/>
								</div>
								<div className='flex w-10'>
									<Image
										src={`/assets/images/star.svg`}
										alt='*'
										className='w-full h-auto object-contain animate-rotate'
										width={40}
										height={40}
									/>
								</div>
							</div>
						))}
					</div>
				</InfiniteLooper>
			</div>

			<div className='rotate-0 z-20 border-b border-b-white border-t border-t-white bg-app-bg'>
				<InfiniteLooper speed={50} direction='right'>
					<div className='flex gap-40 px-20 items-center'>
						{partners.map((partner) => (
							<div
								className='flex gap-40'
								key={`loop-2-${partner._id}`}
							>
								<div className='flex w-20' title={partner.name}>
									<Image
										src={partner.image}
										alt={partner.alt}
										className='w-full h-auto object-contain'
										width={70}
										height={70}
									/>
								</div>
								<div className='flex w-10'>
									<Image
										src={`/assets/images/star.svg`}
										alt='*'
										className='w-full h-auto object-contain animate-rotate'
										width={40}
										height={40}
									/>
								</div>
							</div>
						))}
					</div>
				</InfiniteLooper>
			</div>

			<div className='-rotate-6 z-10 border-b border-b-white border-t border-t-white bg-app-bg'>
				<InfiniteLooper speed={50} direction='left'>
					<div className='flex gap-40 px-20 items-center'>
						{partners.map((partner) => (
							<div
								className='flex gap-40'
								key={`loop-3-${partner._id}`}
							>
								<div className='flex w-20' title={partner.name}>
									<Image
										src={partner.image}
										alt={partner.alt}
										className='w-full h-auto object-contain'
										width={70}
										height={70}
									/>
								</div>
								<div className='flex w-10'>
									<Image
										src={`/assets/images/star.svg`}
										alt='*'
										className='w-full h-auto object-contain animate-rotate'
										width={40}
										height={40}
									/>
								</div>
							</div>
						))}
					</div>
				</InfiniteLooper>
			</div>
		</section>
	);
};

export default Partners;
