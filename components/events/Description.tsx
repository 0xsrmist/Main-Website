'use client';

import React from 'react';
import { PortableText } from '@portabletext/react';
import SanityImage from '@/components/resuable/SanityImage';

const portableTextComponents = {
	types: {
		image: ({ value }: any) => {
			return <SanityImage {...value} />;
		},
	},
};

type EventDescriptionProps = React.ComponentProps<'main'> & {
	event: EventData;
};

const EventDescription: React.FC<EventDescriptionProps> = ({ event }) => {
	return (
		<div className='prose mt-8 prose-invert'>
			{event.description && (
				<PortableText
					value={event.description}
					components={portableTextComponents}
				/>
			)}
		</div>
	);
};

export default EventDescription;
