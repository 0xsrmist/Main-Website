import React from 'react';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { teamMembersQuery } from '@/sanity/lib/queries';
import Hero from '@/components/team/Hero';
import Members from '@/components/team/Members';

async function sortTeamMembers(members: TeamMember[]) {
	const FILTERED_TEAM_MEMBERS: Record<CLUB_ROLES, TeamMember[]> = {
		'co-founder': [],
		head: [],
		lead: [],
		member: [],
	};
	Object.keys(FILTERED_TEAM_MEMBERS).forEach((role) => {
		members.forEach((member) => {
			if (role === member.role.slug) {
				FILTERED_TEAM_MEMBERS[role as CLUB_ROLES].push(member);
			}
		});
	});
	return FILTERED_TEAM_MEMBERS;
}

const Team = async () => {
	const teamMembers = await sanityFetch<TeamMember[]>({
		query: teamMembersQuery,
	});
	const members = await sortTeamMembers(teamMembers);
	return (
		<main className='w-full p-4 md:p-16 overflow-hidden'>
			<Hero />
			<Members members={members} />
		</main>
	);
};

export default Team;
