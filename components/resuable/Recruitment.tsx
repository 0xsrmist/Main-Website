/**
 * Ongoing Recruitment Component
 */

// Dependecies
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type RecruitmentProps = React.ComponentProps<'section'> & {
	recruitment: EventData;
};

const dateFormatter = (date: Date) =>
	new Intl.DateTimeFormat('en-IN', {
		dateStyle: 'short',
		timeZone: 'Asia/Kolkata',
	}).format(new Date(date));

const Recruitment: React.FC<RecruitmentProps> = ({ recruitment }) => {
	return (
		<section className='max-w-7xl w-full p-4 md:p-16 mx-auto'>
			<div className='bg-gradient-to-r from-[#4098F8] to-[#E82BCD] p-1 rounded-2xl'>
				<div className='grid grid-cols-1 lg:grid-cols-2 bg-[#010120] rounded-xl p-4'>
					<div className='max-w-[60%] mx-auto w-full md:max-w-full'>
						<Image
							src='/assets/images/working.gif'
							width={100}
							height={100}
							alt=''
							className='w-full h-auto object-contain'
						/>
					</div>
					<div className='flex flex-col items-center justify-center'>
						<h2 className='uppercase text-xl md:text-2xl lg:text-4xl leading-tight font-bold'>
							We are recruiting!
						</h2>
						<p className='text-base md:text-lg lg:text-xl mt-4'>
							Join us to be a part of TPHxSRMIST
						</p>
						<div className='flex items-center justify-center gap-4 mt-8 w-full'>
							<Button
								asChild
								className='bg-app-primary hover:bg-app-primary/80'
							>
								<Link href={recruitment.url} target='_blank'>
									Apply now
								</Link>
							</Button>
							<Button asChild variant={'secondary'} className=''>
								<Link
									href={`/recruitments/${recruitment.slug}`}
								>
									Learn more
								</Link>
							</Button>
						</div>
						<div className='text-justify text-xs mt-8 max-w-[50ch]'>
							<p>
								*<strong>Note</strong>: This recruitment drive
								runs between{' '}
								<b>{dateFormatter(recruitment.startDate)}</b>{' '}
								and <b>{dateFormatter(recruitment.endDate)}</b>{' '}
								and is being conducted in{' '}
								<b>{recruitment.mode}</b> mode.
							</p>
							<p className='mt-1'>
								If the apply now button does not work, use the
								following link by copy and pasting it in a new
								tab -{' '}
								<b>
									<Link
										href={recruitment.url}
										target='_blank'
										className='underline underline-offset-2'
									>
										{recruitment.url}
									</Link>
								</b>
								. If the issue still persists, feel free to{' '}
								<b>
									<Link
										href={'/contact'}
										className='underline underline-offset-2'
									>
										contact
									</Link>
								</b>{' '}
								the team and let us know about this.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Recruitment;
