import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type TeamMemberCardProps = React.ComponentProps<'li'> & {
	member: TeamMember;
};

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
	return (
		<li className='flex flex-col items-center max-w-lg w-full'>
			<div className='relative z-20 max-w-[12rem] w-full mx-auto group'>
				<div className='rounded-full relative overflow-hidden max-w-[12rem] w-full z-10 shadow-md shadow-black'>
					<Image
						src={member.image}
						alt={member.alt}
						width={100}
						height={100}
						className='w-full h-auto object-contain aspect-square'
						unoptimized
					/>
					<div className='w-full h-1/2 text-center object-contain aspect-square absolute top-full group-hover:top-1/2 trandition-all duration-300 left-0 bg-black/90 flex items-center justify-center'>
						<Link
							href={`/team/${member.slug}`}
							className='underline underline-offset-2 hover:text-app-secondary'
						>
							View Profile
						</Link>
					</div>
				</div>
				<div className='w-[12rem] h-[12rem] -z-10 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 blur-[100px] from-app-primary to-app-secondary bg-gradient-to-tr rounded-full' />
			</div>
			<div className='mt-4 bg-slate-800 px-4 py-2 rounded-2xl w-[32ch]'>
				<h3 className='font-medium'>{member.name}</h3>
				<p className='text-sm'>
					<span className='text-app-primary font-medium'>
						{member.domain.name}
					</span>{' '}
					• {member.qualifications}
				</p>
			</div>
		</li>
	);
};

export default TeamMemberCard;
