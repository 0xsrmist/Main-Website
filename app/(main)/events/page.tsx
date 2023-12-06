/**
 * All Events Page
 */

// Dependencies
import React from 'react';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { eventsQuery } from '@/sanity/lib/queries';
import EventsList from '@/components/events/List';
import Hero from '@/components/events/Hero';

const Events = async () => {
	const events = await sanityFetch<EventData[]>({ query: eventsQuery });
	return (
		<main className='w-full'>
			<Hero />
			{events.length > 0 ? <EventsList events={events} /> : null}
		</main>
	);
};

export default Events;
