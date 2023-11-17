import React from 'react';
import Image from 'next/image';
import { Metadata, ResolvingMetadata } from 'next';
import { redirect } from 'next/navigation';
import Speakers from '@/components/events/Speakers';
import Header from '@/components/events/Header';
import Location from '@/components/events/Location';
import RegisterButton from '@/components/events/RegisterButton';
import { client } from '@/sanity/lib/client';
import { eventPathsQuery, eventQeury } from '@/sanity/lib/queries';
import { TPH_WEBSITE_URL } from '@/constants/tph';

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
			url: `${TPH_WEBSITE_URL}/events/${event.slug}`,
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
	if (!event) {
		redirect('/events');
	}
	return (
		<main className='w-full'>
			<div className='w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 mt-20 p-4 md:p-16'>
				<section className='h-fit md:sticky md:top-32'>
					<div className='w-full overflow-hidden rounded-2xl'>
						<Image
							src={event.coverImage}
							width={100}
							height={100}
							alt={event.coverImageAlt}
							className='w-full h-auto object-contain'
							unoptimized
						/>
					</div>
					<RegisterButton url={event.url} />
				</section>
				<section>
					<Header event={event} />
					<RegisterButton url={event.url} />
					<Location event={event} />
					{event.speakers && event.speakers.length > 0 ? (
						<Speakers speakers={event.speakers} />
					) : null}
				</section>
			</div>
		</main>
	);
};

export default Event;
