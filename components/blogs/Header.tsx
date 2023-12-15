/**
 * Blog Post Header Component
 */

// Dependencies
import React from 'react';
import Image from 'next/image';
import ReadTime from './ReadTime';

type HeaderProps = React.ComponentProps<'header'> & {
	post: BlogPost;
};

const BlogHeader: React.FC<HeaderProps> = ({ post }) => {
	return (
		<header className='max-w-5xl mx-auto flex flex-col gap-4 h-fit text-center mt-24 p-4 md:p-16'>
			{post.image ? (
				<div className='rounded-lg overflow-hidden max-w-4xl mx-auto'>
					<Image
						src={post.image}
						alt={post.alt || ''}
						width={100}
						height={100}
						className='w-full h-auto object-cover aspect-video'
						unoptimized
					/>
				</div>
			) : null}
			<h1 className='uppercase text-4xl md:text-5xl lg:text-6xl leading-tight font-bold mt-2'>
				{post.title}
			</h1>
			<h2 className='text-base md:text-lg lg:text-xl'>
				{post.description}
			</h2>
			<section className='flex items-center justify-center flex-wrap gap-4 mt-4 text-center text-lg font-medium'>
				{post.author ? (
					<div className='flex items-center gap-2'>
						<div className='rounded-full overflow-hidden w-14 h-14'>
							<Image
								src={post.author.image}
								alt={post.author.alt || ''}
								width={100}
								height={100}
								className='w-full h-auto object-cover'
								unoptimized
							/>
						</div>
						<p>{post.author.name}</p>
					</div>
				) : null}
				<div>•</div>
				<p>
					{new Intl.DateTimeFormat('en-US', {
						dateStyle: 'medium',
						timeZone: 'Asia/Kolkata',
					}).format(new Date(post.publishedAt))}
				</p>
				<div>•</div>
				<ReadTime body={post.body} />
			</section>
		</header>
	);
};

export default BlogHeader;
