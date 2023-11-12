import React from 'react';
import { client } from '@/sanity/lib/client';
import { teamMemberPathsQuery, teamMemberQuery } from '@/sanity/lib/queries';
import { Metadata, ResolvingMetadata } from 'next';
import { redirect } from 'next/navigation';

type Props = {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
	const members = await client.fetch(teamMemberPathsQuery);
	return members;
}

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const member = await client.fetch<TeamMember>(teamMemberQuery, params);
	return {
		title: `${member.name} | TPH x SRMIST`,
		description: member.bio,
		openGraph: {
			...(member.image && { images: [member.image] }),
			type: 'website',
			title: `${member.name} | TPH x SRMIST`,
			description: member.bio,
		},
		twitter: {
			...(member.image && { images: [member.image] }),
			card: 'summary_large_image',
			title: `${member.name} | TPH x SRMIST`,
			description: member.bio,
		},
	};
}

const TeamMember = async ({ params }: Props) => {
	const member = await client.fetch<TeamMember>(teamMemberQuery, params);
	console.log(member);
	if (!member) {
		redirect('/team');
	}
	return <main>TeamMember</main>;
};

export default TeamMember;
