/**
 * All Team Members Page
 */

// Dependencies
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Hero from '@/components/team/Hero';
import Members from '@/components/team/Members';
import ClubFounder from '@/components/team/ClubFounder';
import ChapterLeads from '@/components/team/ChapterLeads';

import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { teamAlumnisQuery, teamMembersQuery } from '@/sanity/lib/queries';
import Alumni from '@/components/team/Alumni';
import BoardMember from '@/components/team/BoardMembers';
import VicePresidents from '@/components/team/VicePresidents';


async function sortTeamMembersByRole(members: TeamMember[]) {
	const FILTERED_TEAM_MEMBERS: Record<CLUB_ROLES, TeamMember[]> = {
		'club-founder': [],
		'chapter-leads' : [],
		'head': [],
		'lead': [],
		'member': [],
		'board-member' : [],
		'vice-president': [],
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

async function sortTeamMembersByDomain(
	members: Awaited<ReturnType<typeof sortTeamMembersByRole>>
) {
	const FILTERED_TEAM_MEMBERS = {
		technical: {},
		corporate: {},
		creatives: {},
	} as Record<CLUB_DOMAINS, Record<CLUB_ROLES, TeamMember[]>>;

	Object.keys(FILTERED_TEAM_MEMBERS).forEach((domain) => {
		Object.keys(members).forEach((role) => {
			const roleMembers = members[role as CLUB_ROLES].filter(
				(member) => domain === member.domain.slug
			);
			FILTERED_TEAM_MEMBERS[domain as CLUB_DOMAINS][role as CLUB_ROLES] =
				roleMembers;
		});
	});

	return FILTERED_TEAM_MEMBERS;
}

const tabList: CLUB_DOMAINS[] = ['technical', 'corporate', 'creatives'];

const Team = async () => {
	const teamMembers = await sanityFetch<TeamMember[]>({
		query: teamMembersQuery,
	});
	const alumnis = await sanityFetch<TeamMember[]>({
		query: teamAlumnisQuery,
	});
	const membersByRole = await sortTeamMembersByRole(teamMembers);
	const membersByDomain = await sortTeamMembersByDomain(membersByRole);

	return (
		<main className='w-full p-4 md:p-16 overflow-hidden'>
			<Hero />
			<ClubFounder members={membersByRole} />
			{membersByRole['chapter-leads'].length !== 0 ? (
				<ChapterLeads members={membersByRole} />
			) : null}
			{membersByRole['vice-president'].length !== 0 ? (
				<VicePresidents members={membersByRole} />
			) : null}
			{/* <Members members={members} /> */}
			<Tabs
				defaultValue='technical'
				className='w-full flex flex-col items-center justify-center mt-4 md:mt-12'
			>
				<TabsList className='mx-auto'>
					{tabList.map((domain) => (
						<TabsTrigger
							key={`tab-list-${domain}`}
							value={domain}
							className='capitalize'
						>
							{domain}
						</TabsTrigger>
					))}
				</TabsList>
				{Object.keys(membersByDomain).map((domain) => (
					<TabsContent
						key={`tab-content-${domain}`}
						value={domain}
						asChild
					>
						<Members
							members={membersByDomain[domain as CLUB_DOMAINS]}
							domain={domain as CLUB_DOMAINS}
						/>
					</TabsContent>
				))}
			</Tabs>
			<BoardMember members={membersByRole} />
			{alumnis.length > 0 ? <Alumni members={alumnis} /> : null}
		</main>
	);
};

export default Team;
