/**
 * Blogs Page
 */

// Dependencies
import React from 'react';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { postsQuery } from '@/sanity/lib/queries';
import BlogsSection from '@/components/home/Blogs';
import Hero from '@/components/blogs/Hero';

const Blogs = async () => {
	const posts = await sanityFetch<BlogPost[]>({ query: postsQuery });
	return (
		<main className=''>
			<Hero />
			<section id='blogs'>
				<BlogsSection posts={posts} />
			</section>
		</main>
	);
};

export default Blogs;
