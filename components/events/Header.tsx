/**
 * Header Component - Events Page
 */

// Dependecies
import React from 'react';
import { Calendar, Clock3, LocateFixed, MapPin } from 'lucide-react';

type HeaderProps = React.ComponentProps<'div'> & {
	event: EventData;
};

const dateFormatter = (date: Date) =>
	new Intl.DateTimeFormat('en-IN', {
		dateStyle: 'medium',
		timeStyle: 'short',
		timeZone: 'Asia/Kolkata',
	}).format(new Date(date));

const Header: React.FC<HeaderProps> = ({ event }) => {
	return (
		<div className='w-full'>
			<h1 className='uppercase text-4xl md:text-5xl lg:text-6xl leading-tight font-bold'>
				{event.title}
			</h1>
			<p className='font-medium flex items-center gap-4 mt-2 flex-wrap text-xs md:text-sm capitalize'>
				<span className='bg-white text-app-primary border border-slate-300 px-4 py-2 rounded-xl'>
					{event.eventType}
				</span>
				|
				<span className='flex items-center gap-2'>
					<Clock3 size={16} strokeWidth={1.5} />
					{event.status}
				</span>
				|
				<span className='flex gap-2'>
					<LocateFixed size={16} strokeWidth={1.5} />
					<span>Mode: {event.mode}</span>
				</span>
				|
				<span className='flex gap-2 normal-case'>
					<Calendar size={16} strokeWidth={1.5} />
					from {dateFormatter(event.startDate)} to{' '}
					{dateFormatter(event.endDate)}
				</span>
			</p>
			<h2 className='text-base md:text-lg lg:text-xl mt-4'>
				{event.about}
			</h2>
		</div>
	);
};

export default Header;
