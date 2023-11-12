import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import EventInfo from '../cards/EventInfo';
import { ArrowRight } from 'lucide-react';

type EventsProps = React.ComponentProps<'section'> & {
	events: EventData[];
};

const Events: React.FC<EventsProps> = ({ events }) => {
	return (
		<section className='w-full max-w-7xl p-4 md:p-16 mx-auto flex flex-col'>
			<h2 className='uppercase text-xl md:text-2xl lg:text-4xl leading-tight font-bold text-center'>
				Events
			</h2>
			<ul className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4'>
				{events.map((event) => (
					<EventInfo
						key={`landing-event-info-${event._id}`}
						event={event}
					/>
				))}
			</ul>
			<Button
				asChild
				variant={'link'}
				className='text-white decoration-white ml-auto mt-4 group'
			>
				<Link href='/events' className='flex items-center gap-1'>
					Explore more events{' '}
					<ArrowRight
						className='group-hover:translate-x-1 transition-all duration-300'
						size={16}
						strokeWidth={1.5}
					/>
				</Link>
			</Button>
		</section>
	);
};

export default Events;
