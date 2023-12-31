/**
 * Individual Events Page
 */

// Dependencies
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
import EventDescription from '@/components/events/Description';
import Gallery from '@/components/events/Gallery';

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
		metadataBase: new URL(TPH_WEBSITE_URL),
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
					{event.status !== 'completed' ? (
						<RegisterButton url={event.url} />
					) : null}
				</section>
				<section>
					<Header event={event} />
					{event.status !== 'completed' ? (
						<RegisterButton url={event.url} />
					) : null}
					<Location event={event} />
					{event.description ? (
						<EventDescription event={event} />
					) : null}
					{event.speakers && event.speakers.length > 0 ? (
						<Speakers speakers={event.speakers} />
					) : null}
					{event.imageGallery && event.imageGallery.length > 0 ? (
						<Gallery gallery={event.imageGallery!} />
					) : null}
				</section>
			</div>
		</main>
	);
};

export default Event;
