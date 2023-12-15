/**
 * List Component - Events Page
 */

// Dependecies
import React from 'react';
import EventInfo from '@/components/cards/EventInfo';

type EventsListProps = React.ComponentProps<'section'> & {
	events: EventData[];
};

const EventsList: React.FC<EventsListProps> = ({ events }) => {
	return (
		<section className='w-full max-w-7xl p-4 md:p-16 mx-auto' id='events'>
			<ul className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
				{events.map((event) => (
					<EventInfo
						key={`event-page-event-info-${event._id}`}
						event={event}
					/>
				))}
			</ul>
		</section>
	);
};

export default EventsList;
