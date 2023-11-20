import React from 'react';
import TeamMemberCard from '../cards/TeamMember';

type MembersProps = React.ComponentProps<'section'> & {
	members: Record<CLUB_ROLES, TeamMember[]>;
};

const Members: React.FC<MembersProps> = ({ members }) => {
	return (
		<section className='w-full mt-4 md:mt-12 max-w-7xl mx-auto text-center'>
			<section className='mt-16'>
				<h2 className='uppercase text-base md:text-lg lg:text-xl font-medium'>
					Club <span className='text-app-primary'>Heads</span>
				</h2>
				<ul className='w-full flex flex-wrap items-center justify-center gap-8 mt-4'>
					{members['head'].map((member) => (
						<TeamMemberCard member={member} key={member._id} />
					))}
				</ul>
			</section>
			<section className='mt-16'>
				<h2 className='uppercase text-base md:text-lg lg:text-xl font-medium'>
					Club <span className='text-app-primary'>Leads</span>
				</h2>
				<ul className='w-full flex flex-wrap items-center justify-center gap-8 mt-4'>
					{members['lead'].map((member) => (
						<TeamMemberCard member={member} key={member._id} />
					))}
				</ul>
			</section>
			<section className='mt-16'>
				<h2 className='uppercase text-base md:text-lg lg:text-xl font-medium'>
					Club <span className='text-app-primary'>members</span>
				</h2>
				<ul className='w-full flex flex-wrap items-center justify-center gap-8 mt-4'>
					{members['member'].map((member) => (
						<TeamMemberCard member={member} key={member._id} />
					))}
				</ul>
			</section>
		</section>
	);
};

export default Members;
