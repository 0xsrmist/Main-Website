import React from 'react';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { eventsQuery } from '@/sanity/lib/queries';

const Events = async () => {
	const events = await sanityFetch<EventData[]>({query: eventsQuery});
	console.log(events)
	return <main>Events</main>;
};

export default Events;
