/**
 * Location Component - Events Page
 */

// Dependecies
import React from 'react';
import Link from 'next/link';
import { Map, MapPin, ListStart, ListEnd } from 'lucide-react';

type LocationProps = React.ComponentProps<'div'> & {
	event: EventData;
};

const dateFormatter = (date: Date) =>
	new Intl.DateTimeFormat('en-IN', {
		dateStyle: 'long',
		timeStyle: 'long',
	}).format(new Date(date));

const Location: React.FC<LocationProps> = ({ event }) => {
	return (
		<div className='mt-8'>
			<h3 className='uppercase text-base md:text-lg lg:text-xl'>
				Location & Time
			</h3>
			{event.address ? (
				<p className='mt-4'>
					<MapPin
						size={20}
						strokeWidth={1.5}
						className='mr-2 inline'
					/>
					<span>• {event.address}</span>
				</p>
			) : null}
			{event.location ? (
				<p className='mt-2'>
					<Map size={20} strokeWidth={1.5} className='mr-2 inline' />
					<Link
						href={event.location}
						className='underline underline-offset-2 hover:text-app-primary transition-all duration-300'
					>
						• {event.location}
					</Link>
				</p>
			) : null}
			<p className='mt-2'>
				<ListStart
					size={20}
					strokeWidth={1.5}
					className='mr-2 inline'
				/>
				<span>
					• starts at <b>{dateFormatter(event.startDate)}</b>
				</span>
			</p>
			<p className='mt-2'>
				<ListEnd size={20} strokeWidth={1.5} className='mr-2 inline' />
				<span>
					• ends at <b>{dateFormatter(event.endDate)}</b>
				</span>
			</p>
			{/* TODO: possibly use embed url here, or get google maps api key for this */}
			{/* {event.location ? (
				<div className='h-0 overflow-hidden relative pb-[60%] mt-4 rounded-2xl'>
					<iframe
						className='h-full absolute w-full border-0 left-0 top-0'
						src={`${event.location}&amp;output=embed`}
					></iframe>
				</div>
			) : null} */}
		</div>
	);
};

export default Location;
