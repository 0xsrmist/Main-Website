/**
 * All Recruitments Page
 */

// Dependencies
import React from 'react';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import {
	latestRecruitmentEventQuery,
	pastRecruitmentEventsQuery,
} from '@/sanity/lib/queries';
import EventsList from '@/components/events/List';
import Hero from '@/components/events/RecruitmentHero';
import Recruitment from '@/components/resuable/Recruitment';

const Recruitments = async () => {
	const latestRecruitment = await sanityFetch<EventData>({
		query: latestRecruitmentEventQuery,
	});
	const pastRecruitments = await sanityFetch<EventData[]>({
		query: pastRecruitmentEventsQuery,
	});
	console.log(latestRecruitment);
	return (
		<main className='w-full'>
			<Hero />
			<Recruitment recruitment={latestRecruitment} />
			<section className='max-w-7xl mx-auto' id='recruitments'>
				<h2 className='uppercase text-xl md:text-2xl lg:text-4xl leading-tight font-bold text-center'>
					Past Recruitments
				</h2>
				{pastRecruitments.length > 0 ? (
					<EventsList events={pastRecruitments} />
				) : null}
			</section>
		</main>
	);
};

export default Recruitments;
