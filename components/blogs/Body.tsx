/**
 * Blog Body Component
 */

// Dependencies
import React from 'react';
import { PortableText } from '@portabletext/react';
import { Badge } from '@/components/ui/badge';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';
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
		<section className='max-w-3xl w-full mx-auto p-4 md:px-16'>
			<div className='prose prose-invert'>
				{post.body && (
					<PortableText
						value={post.body}
						components={portableTextComponents}
					/>
				)}
			</div>
			{post.categories && post.categories.length > 0 ? (
				<div className='mt-4'>
					<span>Tags:</span>
					<ul className='mt-2'>
						{post.categories.map((category) => (
							<Tooltip
								key={`${post._id}-${category._id}`}
								delayDuration={100}
							>
								<TooltipTrigger asChild className='select-none'>
									<Badge variant={'secondary'}>
										{category.title}
									</Badge>
								</TooltipTrigger>
								{category.description ? (
									<TooltipContent className='max-w-sm'>
										{category.description}
									</TooltipContent>
								) : null}
							</Tooltip>
						))}
					</ul>
				</div>
			) : null}
		</section>
	);
};

export default BlogBody;
