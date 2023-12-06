/**
 * Blogs Page
 */

// Dependencies
import React from 'react';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { postsQuery } from '@/sanity/lib/queries';

const Blogs = async () => {
	const posts = await sanityFetch<BlogPost[]>({ query: postsQuery });
	return <main>Blogs</main>;
};

export default Blogs;
