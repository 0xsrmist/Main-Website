/**
 * Individual Recruitments Page
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
import { recruitmentPathsQuery, recruitmentQuery } from '@/sanity/lib/queries';
import { TPH_WEBSITE_URL } from '@/constants/tph';
import EventDescription from '@/components/events/Description';

type Props = {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
	const events = await client.fetch(recruitmentPathsQuery);
	return events;
}

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const recruitment = await client.fetch<EventData>(recruitmentQuery, params);
	return {
		metadataBase: new URL(TPH_WEBSITE_URL),
		title: `${recruitment.title} | TPH x SRMIST`,
		description: recruitment.about,
		openGraph: {
			...(recruitment.coverImage && { images: [recruitment.coverImage] }),
			type: 'website',
			title: `${recruitment.title} | TPH x SRMIST`,
			description: recruitment.about,
			url: `${TPH_WEBSITE_URL}/events/${recruitment.slug}`,
		},
		twitter: {
			...(recruitment.coverImage && { images: [recruitment.coverImage] }),
			card: 'summary_large_image',
			title: `${recruitment.title} | TPH x SRMIST`,
			description: recruitment.about,
		},
	};
}

const Recruitment = async ({ params }: Props) => {
	const recruitment = await client.fetch<EventData>(recruitmentQuery, params);
	if (!recruitment) {
		redirect('/recruitments');
	}
	return (
		<main className='w-full'>
			<div className='w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 mt-20 p-4 md:p-16'>
				<section className='h-fit md:sticky md:top-32'>
					<div className='w-full overflow-hidden rounded-2xl'>
						<Image
							src={recruitment.coverImage}
							width={100}
							height={100}
							alt={recruitment.coverImageAlt}
							className='w-full h-auto object-contain'
							unoptimized
						/>
					</div>
					{recruitment.status !== 'completed' ? (
						<RegisterButton url={recruitment.url} />
					) : null}
				</section>
				<section>
					<Header event={recruitment} />
					{recruitment.status !== 'completed' ? (
						<RegisterButton url={recruitment.url} />
					) : null}
					<Location event={recruitment} />
					{recruitment.description ? (
						<EventDescription event={recruitment} />
					) : null}
					{recruitment.speakers && recruitment.speakers.length > 0 ? (
						<Speakers speakers={recruitment.speakers} />
					) : null}
				</section>
			</div>
		</main>
	);
};

export default Recruitment;
