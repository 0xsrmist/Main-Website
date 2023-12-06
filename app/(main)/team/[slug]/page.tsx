/**
 * Individual Team Member Page
 */

// Dependencies
import React from 'react';
import { client } from '@/sanity/lib/client';
import { teamMemberPathsQuery, teamMemberQuery } from '@/sanity/lib/queries';
import { Metadata, ResolvingMetadata } from 'next';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
	LucideIcon,
	Instagram,
	Twitter,
	Linkedin,
	Mail,
	Globe,
	Youtube,
	Github,
} from 'lucide-react';
import z from 'zod';
import { Button } from '@/components/ui/button';
import { TPH_WEBSITE_URL } from '@/constants/tph';

type Props = {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

function extractTwitterUsername(url: string) {
	const regex =
		/(?:https?:\/\/(?:www\.)?(?:twitter\.com|x\.com)\/|(?:(?:twitter\.com|x\.com)\/))(?:(?!\/)[\w]){1,15}/;
	const match = url.match(regex);
	return match ? match[0] : null;
}

export async function generateStaticParams() {
	const members = await client.fetch(teamMemberPathsQuery);
	return members;
}

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const member = await client.fetch<TeamMember>(teamMemberQuery, params);
	const twitterUsername = extractTwitterUsername(member?.twitter || '');
	return {
		metadataBase: new URL(TPH_WEBSITE_URL),
		title: `${member.name} | TPH x SRMIST`,
		description: member.bio,
		openGraph: {
			...(member.image && { images: [member.image] }),
			type: 'website',
			title: `${member.name} | TPH x SRMIST`,
			description: member.bio,
			url: `${TPH_WEBSITE_URL}/team/${member.slug}`,
		},
		twitter: {
			...(member.image && { images: [member.image] }),
			card: 'summary_large_image',
			title: `${member.name} | TPH x SRMIST`,
			description: member.bio,
			...(twitterUsername && { creator: `@${twitterUsername}` }),
		},
	};
}

const userSocials = z
	.array(
		z.object({
			Icon: z.custom<LucideIcon>(),
			url: z.string().or(z.null()).optional(),
			title: z.string(),
		})
	)
	.transform((val) =>
		val.filter(
			(social) =>
				typeof social.url !== 'undefined' &&
				social.url !== null &&
				social.url?.length !== 0
		)
	);

type UserSocials = z.infer<typeof userSocials>;

const dateFormatter = (date: Date) =>
	new Intl.DateTimeFormat('en-IN', {
		dateStyle: 'medium',
		timeZone: 'Asia/Kolkata',
	}).format(new Date(date));

const TeamMember = async ({ params }: Props) => {
	const member = await client.fetch<TeamMember>(teamMemberQuery, params);
	if (!member) {
		redirect('/team');
	}

	const socials: UserSocials = userSocials.parse([
		{
			Icon: Github,
			url: member.github,
			title: 'GitHub',
		},
		{
			Icon: Instagram,
			url: member.instagram,
			title: 'Instagram',
		},
		{
			Icon: Linkedin,
			url: member.linkedin,
			title: 'LinkedIn',
		},
		{
			Icon: Globe,
			url: member.website,
			title: 'Website',
		},
		{
			Icon: Youtube,
			url: member.youtube,
			title: 'YouTube',
		},
		{
			Icon: Twitter,
			url: member.twitter,
			title: 'Twitter',
		},
		{
			Icon: Mail,
			url: member.email ? `mailto:${member.email}` : null,
			title: 'Mail',
		},
	]);
	return (
		<main className='w-full p-4 md:p-16 relative overflow-hidden min-h-screen z-20'>
			<div className='max-w-7xl mx-auto mt-20 gap-8 flex items-center jusitfy-center flex-col z-20'>
				<section className='max-w-[12rem] md:max-w-xs rounded-2xl overflow-hidden'>
					<Image
						src={member.image}
						width={100}
						height={100}
						alt={member.alt}
						className='w-full h-auto object-contain aspect-square'
						unoptimized
					/>
				</section>
				<section className='text-center'>
					<h1 className='uppercase text-4xl md:text-5xl lg:text-6xl leading-tight font-bold'>
						{member.name}
					</h1>
					{member.role.name !== 'Co-founder' ? (
						<h2 className='text-base md:text-lg lg:text-xl'>
							{member.role.name} • {member.domain.name} domain
						</h2>
					) : (
						<h2 className='text-base md:text-lg lg:text-xl'>
							{member.role.name}
						</h2>
					)}
					<h3 className='text-base md:text-lg max-w-4xl mx-auto'>
						{member?.bio || null}
					</h3>
					<ul className='mt-8 max-w-xl w-full mx-auto flex flex-col gap-4'>
						{socials.map((social, idx) => (
							<li key={`${member._id}-social-${idx}`}>
								<Button
									variant={'secondary'}
									asChild
									className='w-full flex items-center bg-app-primary/60 hover:bg-app-primary text-white font-semibold rounded-2xl'
								>
									<Link href={social.url || '#'}>
										<social.Icon
											className='mr-4'
											strokeWidth={1.5}
										/>{' '}
										<span className='capitalize'>
											{social.title}
										</span>
									</Link>
								</Button>
							</li>
						))}
					</ul>
					{member.startDate ? (
						<p className='text-sm mt-4'>
							Member since: {dateFormatter(member.startDate)}
						</p>
					) : null}
				</section>
			</div>
			<div className='absolute w-full -left-8 md:left-0 top-0 max-w-[12rem] md:max-w-sm -z-10'>
				<Image
					src='/assets/images/looper.png'
					width={100}
					height={100}
					alt=''
					className='w-full h-auto object-contain'
					unoptimized
				/>
			</div>
			<div className='absolute top-8 w-full -right-20 md:-right-32 max-w-[8rem] md:max-w-sm animate-float -z-10'>
				<Image
					src='/assets/images/planet.png'
					width={100}
					height={100}
					alt=''
					className='w-full h-auto object-contain'
					unoptimized
				/>
			</div>
		</main>
	);
};

export default TeamMember;
