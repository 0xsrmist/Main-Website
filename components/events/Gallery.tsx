/**
 * Gallery Component - Events Page
 */

// Dependecies
import React from 'react';
import Image from 'next/image';

type GalleryProps = React.ComponentProps<'div'> & {
	gallery: EventData['imageGallery'];
};

const Gallery: React.FC<GalleryProps> = ({ gallery }) => {
	return (
		<div className='w-full mt-8'>
			<h3 className='uppercase text-base md:text-lg lg:text-xl'>
				Gallery
			</h3>
			<ul className='gap-5 columns-2 sm:gap-4 [&>li:not(:first-child)]:mt-4 mt-4'>
				{gallery?.map((item) => (
					<li
						key={`gallery-item-${item._id}`}
						className='block rounded-lg overflow-hidden'
					>
						<Image
							src={item.image}
							alt={item.alt}
							width={100}
							height={100}
							className='w-full h-auto object-cover'
							unoptimized
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Gallery;
