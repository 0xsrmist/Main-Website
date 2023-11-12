import React from 'react';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { teamMembersQuery } from '@/sanity/lib/queries';

type CLUB_ROLES = 'co-founder' | 'head' | 'lead' | 'member';

const FILTERED_TEAM_MEMBERS: Record<CLUB_ROLES, TeamMember[]> = {
	'co-founder': [],
	head: [],
	lead: [],
	member: [],
};

const Team = async () => {
	const teamMembers = await sanityFetch<TeamMember[]>({
		query: teamMembersQuery,
	});
	Object.keys(FILTERED_TEAM_MEMBERS).forEach((role) => {
		teamMembers.forEach((member) => {
			if (role === member.role.slug) {
				FILTERED_TEAM_MEMBERS[role as CLUB_ROLES].push(member);
			}
		});
	});
	return <main>Team</main>;
};

export default Team;
