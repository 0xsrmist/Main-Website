/**
 * Members Component - Team Page
 */

// Dependecies
import React from 'react';
import TeamMemberCard from '../cards/TeamMember';

type MembersProps = React.ComponentProps<'section'> & {
	members: Record<CLUB_ROLES, TeamMember[]>;
	domain: CLUB_DOMAINS;
};

const Members: React.FC<MembersProps> = ({ members, domain }) => {
	return (
		<section className='w-full max-w-7xl mx-auto text-center'>
			{members['director'].length > 0 ? (
				<section className='mt-16'>
					<h2 className='uppercase text-xl md:text-2xl lg:text-3xl font-medium'>
						{domain}{' '}
						<span className='text-app-primary'>Director</span>
					</h2>
					<ul className='w-full flex flex-wrap items-center justify-evenly gap-8 mt-8'>
						{members['director'].map((member) => (
							<TeamMemberCard member={member} key={member._id} />
						))}
					</ul>
				</section>
			) : null}
			{members['head'].length > 0 ? (
				<section className='mt-16'>
					<h2 className='uppercase text-xl md:text-2xl lg:text-3xl font-medium'>
						{domain} <span className='text-app-primary'>Heads</span>
					</h2>
					<ul className='w-full flex flex-wrap items-center justify-evenly gap-8 mt-8'>
						{members['head'].map((member) => (
							<TeamMemberCard member={member} key={member._id} />
						))}
					</ul>
				</section>
			) : null}
			{members['lead'].length > 0 ? (
				<section className='mt-16'>
					<h2 className='uppercase text-xl md:text-2xl lg:text-3xl font-medium'>
						{domain} <span className='text-app-primary'>Leads</span>
					</h2>
					<ul className='w-full flex flex-wrap items-center justify-evenly gap-8 mt-8'>
						{members['lead'].map((member) => (
							<TeamMemberCard member={member} key={member._id} />
						))}
					</ul>
				</section>
			) : null}
			{members['member'].length > 0 ? (
				<section className='mt-16'>
					<h2 className='uppercase text-xl md:text-2xl lg:text-3xl font-medium'>
						{domain}{' '}
						<span className='text-app-primary'>members</span>
					</h2>
					<ul className='w-full flex flex-wrap items-center justify-evenly gap-8 mt-8'>
						{members['member'].map((member) => (
							<TeamMemberCard member={member} key={member._id} />
						))}
					</ul>
				</section>
			) : null}
		</section>
	);
};

export default Members;
