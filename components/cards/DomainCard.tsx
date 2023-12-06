/**
 * Domain Card Component
 */

// Dependecies
import React from 'react';
import Image from 'next/image';

type DomainCardProps = React.ComponentProps<'li'> & {
	domain: Domain;
};

const DomainCard: React.FC<DomainCardProps> = ({ domain }) => {
	return (
		<li className='flex flex-col gap-6 w-72 text-white h-full self-stretch'>
			<div className='p-2 rounded-lg bg-app-primary/20'>
				<Image
					src={domain.image}
					alt='domain'
					width={500}
					height={600}
					objectFit='cover'
				/>
			</div>
			<div className='flex flex-col items-center text-center gap-2'>
				<h3 className='text-base md:text-lg lg:text-xl mt-2 font-medium'>
					{domain.name}
				</h3>
				<p className='text-justify'>{domain.description}</p>
			</div>
		</li>
	);
};

export default DomainCard;
