/**
 * Blog Post Header Component
 */

// Dependencies
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ReadTime from './ReadTime';

type HeaderProps = React.ComponentProps<'header'> & {
	post: BlogPost;
};

const BlogHeader: React.FC<HeaderProps> = ({ post }) => {
	return (
		<header className='max-w-5xl mx-auto flex flex-col gap-4 h-fit text-center mt-24 p-4 md:px-16'>
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
					<Link
						href={post.author.slug}
						className='flex items-center gap-2 group'
					>
						<div className='rounded-full overflow-hidden w-14 h-14'>
							<Image
								src={post.author.image}
								alt={post.author.alt || ''}
								width={100}
								height={100}
								className='w-full h-auto object-cover group-hover:scale-105 transition-all'
								unoptimized
							/>
						</div>
						<span className='group-hover:underline underline-offset-2'>
							{post.author.name}
						</span>
					</Link>
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
			{post?.canonicalLink ? (
				<section className='text-sm max-w-[40ch] mx-auto'>
					Originally posted at
					<br />
					<Link
						href={post.canonicalLink}
						className='underline underline-offset-2'
						target='_blank'
					>
						{post.canonicalLink}
					</Link>
					.
				</section>
			) : null}
		</header>
	);
};

export default BlogHeader;
