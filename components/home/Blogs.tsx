/**
 * Blogs Section - Home Page
 */

// Dependencies
import React from 'react';
import BlogPostCard from '../cards/BlogCard';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type BlogsProps = React.ComponentProps<'section'> & {
	posts: BlogPost[];
};

const Blogs: React.FC<BlogsProps> = ({ posts }) => {
	return (
		<section className='h-full w-full flex flex-col items-start justify-center max-w-7xl mx-auto gap-8 lg:gap-20 p-4 md:p-16'>
			<div className='text-center mx-auto'>
				<h2 className='uppercase text-xl md:text-2xl lg:text-4xl leading-tight font-bold'>
					Blogs
				</h2>
				<p className='text-base md:text-lg lg:text-xl mt-4'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quisquam, voluptas.
				</p>
			</div>
			<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{posts.map((post) => (
					<BlogPostCard
						post={post}
						key={`landing-blog-${post._id}`}
					/>
				))}
			</ul>
			<Button
				asChild
				variant={'link'}
				className='text-white decoration-white ml-auto mt-4 group'
			>
				<Link href='/blogs' className='flex items-center gap-1'>
					Explore more blogs{' '}
					<ArrowRight
						className='group-hover:translate-x-1 transition-all duration-300'
						size={16}
						strokeWidth={1.5}
					/>
				</Link>
			</Button>
		</section>
	);
};

export default Blogs;
