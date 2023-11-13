import React from 'react';
import TeamMemberCard from '../cards/TeamMember';

type MembersProps = React.ComponentProps<'section'> & {
	members: TeamMember[];
};

type CLUB_ROLES = 'co-founder' | 'head' | 'lead' | 'member';

const FILTERED_TEAM_MEMBERS: Record<CLUB_ROLES, TeamMember[]> = {
	'co-founder': [],
	head: [],
	lead: [],
	member: [],
};

const Members: React.FC<MembersProps> = ({ members }) => {
	Object.keys(FILTERED_TEAM_MEMBERS).forEach((role) => {
		members.forEach((member) => {
			if (role === member.role.slug) {
				FILTERED_TEAM_MEMBERS[role as CLUB_ROLES].push(member);
			}
		});
	});
	return (
		<section className='w-full mt-12 max-w-7xl mx-auto text-center'>
			<section className='mt-16'>
				<h2 className='uppercase text-base md:text-lg lg:text-xl font-medium'>
					Club <span className='text-app-primary'>founders</span>
				</h2>
				<ul className='w-full flex flex-wrap items-center justify-center gap-8 mt-4'>
					{FILTERED_TEAM_MEMBERS['co-founder'].map((member) => (
						<TeamMemberCard member={member} key={member._id} />
					))}
				</ul>
			</section>
			<section className='mt-16'>
				<h2 className='uppercase text-base md:text-lg lg:text-xl font-medium'>
					Club <span className='text-app-primary'>Heads</span>
				</h2>
				<ul className='w-full flex flex-wrap items-center justify-center gap-8 mt-4'>
					{FILTERED_TEAM_MEMBERS['head'].map((member) => (
						<TeamMemberCard member={member} key={member._id} />
					))}
				</ul>
			</section>
			<section className='mt-16'>
				<h2 className='uppercase text-base md:text-lg lg:text-xl font-medium'>
					Club <span className='text-app-primary'>Leads</span>
				</h2>
				<ul className='w-full flex flex-wrap items-center justify-center gap-8 mt-4'>
					{FILTERED_TEAM_MEMBERS['lead'].map((member) => (
						<TeamMemberCard member={member} key={member._id} />
					))}
				</ul>
			</section>
			<section className='mt-16'>
				<h2 className='uppercase text-base md:text-lg lg:text-xl font-medium'>
					Club <span className='text-app-primary'>members</span>
				</h2>
				<ul className='w-full flex flex-wrap items-center justify-center gap-8 mt-4'>
					{FILTERED_TEAM_MEMBERS['member'].map((member) => (
						<TeamMemberCard member={member} key={member._id} />
					))}
				</ul>
			</section>
		</section>
	);
};

export default Members;
