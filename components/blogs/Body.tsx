/**
 * Blog Body Component
 */

// Dependencies
import React from 'react';
import { PortableText } from '@portabletext/react';
import SanityImage from '@/components/resuable/SanityImage';

type BlogBodyProps = React.ComponentProps<'section'> & {
	post: BlogPost;
};

const portableTextComponents = {
	types: {
		image: ({ value }: any) => {
			return <SanityImage {...value} />;
		},
	},
};

const BlogBody: React.FC<BlogBodyProps> = ({ post }) => {
	return (
		<section className='prose max-w-3xl w-full mx-auto prose-invert p-4 md:p-16'>
			{post.body && (
				<PortableText
					value={post.body}
					components={portableTextComponents}
				/>
			)}
		</section>
	);
};

export default BlogBody;
