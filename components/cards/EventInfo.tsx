import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar, LocateFixed, MapPin } from 'lucide-react';

const dateFormatter = (date: Date) =>
	new Intl.DateTimeFormat('en-IN', {
		dateStyle: 'short',
		timeStyle: 'short',
		timeZone: 'Asia/Kolkata',
	}).format(new Date(date));

type EventInfoProps = React.ComponentProps<'li'> & {
	event: EventData;
};

const MAX_ABOUT_LENGTH = 100;

const EventInfo: React.FC<EventInfoProps> = ({ event }) => {
	const about =
		event.about.slice(0, MAX_ABOUT_LENGTH) +
		(event.about.length > MAX_ABOUT_LENGTH ? '...' : '');
	return (
		<li className='w-full overflow-hidden rounded-lg group z-20 block p-4'>
			<div className='relative'>
				<span className='text-xs md:text-sm capitalize absolute bottom-4 left-4 bg-white text-app-primary border border-slate-300 px-4 py-2 rounded-xl font-medium z-20'>
					{event.status}
				</span>
				<span className='text-xs md:text-sm capitalize absolute top-4 right-4 bg-white text-app-primary border border-slate-300 px-4 py-2 rounded-xl font-medium z-20'>
					{dateFormatter(event.startDate)}
				</span>
				<div className='w-full overflow-hidden rounded-tl-lg rounded-tr-lg z-10'>
					<Image
						src={event.coverImage}
						alt={event.coverImageAlt}
						width={100}
						height={100}
						className='w-full h-auto object-contain group-hover:scale-105 transition-all duration-300 aspect-square'
						priority
						unoptimized
					></Image>
				</div>
			</div>
			<div className='flex flex-col items-center justify-center p-4 text-center bg-app-secondary/20 rounded-bl-lg rounded-br-lg'>
				<h3 className='text-base md:text-lg lg:text-xl mt-2 font-medium'>
					{event.title}
				</h3>
				<p className='text-justify'>{about}</p>
				<div className='flex gap-2 text-left mt-4 w-full'>
					<Calendar size={20} strokeWidth={1.5} />
					<p>
						{dateFormatter(event.startDate)} -{' '}
						{dateFormatter(event.endDate)}
					</p>
				</div>
				<div className='flex gap-2 text-left w-full mt-1'>
					<LocateFixed size={20} strokeWidth={1.5} />
					<p>Mode: {event.mode}</p>
				</div>
				{event?.address ? (
					<div className='flex gap-2 text-left w-full mt-1'>
						<MapPin size={20} strokeWidth={1.5} />
						<p>{event.address}</p>
					</div>
				) : null}
				<div className='mt-4 w-full flex gap-4'>
					{event.status !== 'completed' ? (
						<Button
							asChild
							className='w-full bg-app-primary hover:bg-app-primary/80'
						>
							<Link href={event.url} target='_blank'>
								Register now
							</Link>
						</Button>
					) : null}
					<Button asChild className='w-full' variant={'secondary'}>
						<Link href={`/events/${event.slug}`}>Learn more</Link>
					</Button>
				</div>
			</div>
		</li>
	);
};

export default EventInfo;
