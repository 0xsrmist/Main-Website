'use client';
/**
 * Notification Component
 */

// Dependecies
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import InfiniteLooper from './InfiniteLooper';
import { ArrowRight } from 'lucide-react';

type NotificationInfoProps = React.ComponentProps<'section'> & {
	notifications: NotificationData[];
};

const NotificationInfo: React.FC<NotificationInfoProps> = ({
	notifications,
}) => {
	const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);
	const [showNotification, setShowNotification] = useState(false);

	useEffect(() => {
		const showNextNotification = () => {
			setShowNotification(true);
			setTimeout(() => {
				setShowNotification(false);
				setCurrentNotificationIndex((prevIndex) => {
					return (prevIndex + 1) % notifications.length;
				});
			}, Math.floor(Math.random() * (15000 - 10000) + 10000));
		};
		const initialTimeout = setTimeout(showNextNotification, 1000);
		return () => clearTimeout(initialTimeout);
	}, [currentNotificationIndex, notifications]);

	return (
		<section
			className={`${
				showNotification ? 'h-fit py-1' : 'h-0'
			} transition-all duration-300 ease-in-out bg-linearback z-50`}
		>
			{showNotification && notifications.length > 0 ? (
				<Link
					href={notifications[currentNotificationIndex].url}
					target='_blank'
					rel='noopener noreferrer'
					className='w-[100%] block'
				>
					<InfiniteLooper speed={10} direction='right'>
						<div className='flex items-center gap-5 text-xl'>
							<div className='flex animate-rotate px-20'>
								<Image
									src={'/assets/images/star2.svg'}
									alt=''
									width={20}
									height={20}
								/>
							</div>
							<span className='text-[#0A050C] flex gap-2 text-base uppercase font-light'>
								<span>
									{
										notifications[currentNotificationIndex]
											.title
									}{' '}
									-{' '}
									{
										notifications[currentNotificationIndex]
											.description
									}
								</span>
								<ArrowRight />
							</span>
						</div>
					</InfiniteLooper>
				</Link>
			) : null}
		</section>
	);
};

export default NotificationInfo;
