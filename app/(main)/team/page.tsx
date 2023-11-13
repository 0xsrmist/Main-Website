import React from 'react';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { teamMembersQuery } from '@/sanity/lib/queries';
import Hero from '@/components/team/Hero';
import Members from '@/components/team/Members';

const Team = async () => {
	const teamMembers = await sanityFetch<TeamMember[]>({
		query: teamMembersQuery,
	});
	return (
		<main className='w-full p-4 md:p-16'>
			<Hero />
			<Members members={teamMembers} />
		</main>
	);
};

export default Team;
