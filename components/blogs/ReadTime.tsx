'use client';
/**
 * Read Time Component
 */
import React, { useMemo } from 'react';
import { Book } from 'lucide-react';

type ReadTimeProps = React.ComponentProps<'div'> & {
	body: BlogPost['body'];
};

const ReadTime: React.FC<ReadTimeProps> = ({ body }) => {
	const readingTime = useMemo(() => {
		const AVERAGE_READING_TIME = 200;
		let totalWords = 0;
		body?.forEach((item: { children: { text?: string }[] }) => {
			if (item.children) {
				item.children.forEach((child) => {
					if (child?.text) {
						totalWords += child.text.length;
					}
				});
			}
		});
		return Math.round(totalWords / AVERAGE_READING_TIME);
	}, [body]);
	return (
		<div className='flex gap-2'>
			<Book /> <span>{readingTime} min read</span>
		</div>
	);
};

export default ReadTime;
