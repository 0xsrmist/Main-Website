import React from 'react';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { eventsQuery } from '@/sanity/lib/queries';
import EventInfo from '@/components/cards/EventInfo';

const Events = async () => {
	const events = await sanityFetch<EventData[]>({ query: eventsQuery });
	return (
		<main>
			{/* TODO: Kevin Do this part from figma */}
			<section className=''></section>
			{/* Above this */}
			<section className='w-full max-w-7xl p-4 md:p-16 mx-auto'>
				{events.length > 0 ? (
					<ul className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4'>
						{events.map((event) => (
							<EventInfo
								key={`event-page-event-info-${event._id}`}
								event={event}
							/>
						))}
					</ul>
				) : null}
			</section>
		</main>
	);
};

export default Events;
