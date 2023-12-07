/**
 * Blog Card Component
 */

// Dependencies
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type BlogPostProps = React.ComponentProps<'li'> & {
	post: BlogPost;
};

const BlogPostCard: React.FC<BlogPostProps> = ({ post }) => {
	return (
		<li className='group'>
			<Link href={`/blogs/${post.slug}`} className='flex flex-col'>
				<div className='w-full overflow-hidden rounded-tl-lg rounded-tr-lg relative z-20'>
					<Image
						src={post.image || ''}
						alt={post.alt || ''}
						width={100}
						height={100}
						className='w-full h-auto object-cover aspect-video group-hover:scale-105 transition-all duration-300 z-[5]'
						unoptimized
					/>
					<div className='absolute transition-all duration-300 top-full group-hover:top-0 left-0 flex items-center justify-center text-lg w-full h-full bg-black/40 z-10 text-white'>
						Read more
					</div>
				</div>
				<div className='flex flex-col p-4 bg-app-secondary/20 rounded-bl-lg rounded-br-lg'>
					<CardHeader {...post} />
					<p className='mt-2 text-justify'>
						{post.description.slice(0, 120) + '...'}
					</p>
					{post.categories ? (
						<CateogryChips
							categories={post.categories}
							postId={post._id}
						/>
					) : null}
				</div>
			</Link>
		</li>
	);
};

export default BlogPostCard;

interface BlogSubComponentProps {
	CardHeaderProps: React.ComponentProps<'div'> & {
		title: BlogPost['title'];
		author: BlogPost['author'];
		publishedAt: BlogPost['publishedAt'];
	};
	CategoryChipsProps: React.ComponentProps<'ul'> & {
		categories: BlogPost['categories'];
		postId: BlogPost['_id'];
	};
}

const CardHeader: React.FC<BlogSubComponentProps['CardHeaderProps']> = ({
	title,
	author,
	publishedAt,
}) => {
	return (
		<div className='flex justify-between w-full'>
			<div>
				<h3 className='text-base md:text-lg lg:text-xl font-medium'>
					{title}
				</h3>
				{author ? <p className='text-sm'>by {author.name}</p> : null}
			</div>
			<div className='min-w-fit'>
				<p>
					{new Intl.DateTimeFormat('en-US', {
						dateStyle: 'medium',
					}).format(new Date(publishedAt))}
				</p>
				<p className='text-xs text-right'>Published</p>
			</div>
		</div>
	);
};

const CateogryChips: React.FC<BlogSubComponentProps['CategoryChipsProps']> = ({
	categories,
	postId,
}) => {
	return (
		<ul className='flex items-center gap-2 mt-2'>
			{categories?.map((category) => (
				<li
					key={`post-${postId}-category-${category.slug}`}
					className='px-3 py-1 rounded-full bg-app-primary/40 text-sm'
				>
					{category.title}
				</li>
			))}
		</ul>
	);
};
