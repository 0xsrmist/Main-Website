import React from 'react';
import { client } from '@/sanity/lib/client';
import { eventPathsQuery, eventQeury } from '@/sanity/lib/queries';
import { Metadata, ResolvingMetadata } from 'next';
import { redirect } from 'next/navigation';

type Props = {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
	const events = await client.fetch(eventPathsQuery);
	return events;
}

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const event = await client.fetch<EventData>(eventQeury, params);
	return {
		title: `${event.title} | TPH x SRMIST`,
		description: event.about,
		openGraph: {
			...(event.coverImage && { images: [event.coverImage] }),
			type: 'website',
			title: `${event.title} | TPH x SRMIST`,
			description: event.about,
		},
		twitter: {
			...(event.coverImage && { images: [event.coverImage] }),
			card: 'summary_large_image',
			title: `${event.title} | TPH x SRMIST`,
			description: event.about,
		},
	};
}

const Event = async ({ params }: Props) => {
	const event = await client.fetch<EventData>(eventQeury, params);
	console.log(event);
	if (!event) {
		redirect('/events');
	}
	return <main>Event</main>;
};

export default Event;
