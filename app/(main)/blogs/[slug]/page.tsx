import React from 'react';
import { client } from '@/sanity/lib/client';
import { postPathsQuery, postQuery } from '@/sanity/lib/queries';
import { Metadata, ResolvingMetadata } from 'next';
import { redirect } from 'next/navigation';
import { TPH_WEBSITE_URL } from '@/constants/tph';

type Props = {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
	const posts = await client.fetch(postPathsQuery);
	return posts;
}

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const post = await client.fetch<BlogPost>(postQuery, params);
	return {
		metadataBase: new URL(TPH_WEBSITE_URL),
		title: `${post.title} | TPH x SRMIST`,
		description: post.description,
		openGraph: {
			...(post.image && { images: [post.image] }),
			type: 'website',
			title: `${post.title} | TPH x SRMIST`,
			description: post.description,
		},
		twitter: {
			...(post.image && { images: [post.image] }),
			card: 'summary_large_image',
			title: `${post.title} | TPH x SRMIST`,
			description: post.description,
		},
	};
}

const Blog = async ({ params }: Props) => {
	const post = await client.fetch<BlogPost>(postQuery, params);
	console.log(post);
	if (!post) {
		redirect('/blogs');
	}
	return <main>Blog</main>;
};

export default Blog;
