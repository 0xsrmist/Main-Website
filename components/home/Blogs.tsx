/**
 * Blogs Section - Home Page
 */

// Dependencies
import React from 'react';
import BlogPostCard from '../cards/BlogCard';

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
		</section>
	);
};

export default Blogs;
