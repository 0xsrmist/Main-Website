import { client } from '@/sanity/lib/client';
import {
	eventPathsQuery,
	teamMemberPathsQuery,
	recruitmentPathsQuery,
	postPathsQuery,
} from '@/sanity/lib/queries';
import { MetadataRoute } from 'next';
import { TPH_WEBSITE_URL } from '@/constants/tph';

type Params = { params: { slug: string } };

const DEFAULT_SITEMAPS: MetadataRoute.Sitemap = [
	{
		url: `${TPH_WEBSITE_URL}`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 1,
	},
	{
		url: `${TPH_WEBSITE_URL}/about`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.8,
	},
	{
		url: `${TPH_WEBSITE_URL}/events`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.8,
	},
	{
		url: `${TPH_WEBSITE_URL}/recruitments`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.8,
	},
	{
		url: `${TPH_WEBSITE_URL}/blogs`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.8,
	},
	{
		url: `${TPH_WEBSITE_URL}/team`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.7,
	},
	{
		url: `${TPH_WEBSITE_URL}/contact`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.5,
	},
	{
		url: `${TPH_WEBSITE_URL}/terms`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.5,
	},
	{
		url: `${TPH_WEBSITE_URL}/privacy`,
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.5,
	},
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	try {
		const events = await client.fetch<Array<Params>>(eventPathsQuery);
		const eventsSitemap = events.map((event) => {
			return {
				url: `${TPH_WEBSITE_URL}/events/${event.params.slug}`,
				lastModified: new Date(),
				changeFrequency: 'monthly',
				priority: 0.8,
			};
		});
		const recruitments = await client.fetch<Array<Params>>(
			recruitmentPathsQuery
		);
		const recruitmentsSitemap = recruitments.map((recruitment) => {
			return {
				url: `${TPH_WEBSITE_URL}/recruitments/${recruitment.params.slug}`,
				lastModified: new Date(),
				changeFrequency: 'monthly',
				priority: 0.7,
			};
		});
		const posts = await client.fetch<Array<Params>>(postPathsQuery);
		const postsSitemap = posts.map((post) => {
			return {
				url: `${TPH_WEBSITE_URL}/blogs/${post.params.slug}`,
				lastModified: new Date(),
				changeFrequency: 'monthly',
				priority: 0.7,
			};
		});
		const members = await client.fetch<Array<Params>>(teamMemberPathsQuery);
		const membersSitemap = members.map((member) => {
			return {
				url: `${TPH_WEBSITE_URL}/team/${member.params.slug}`,
				lastModified: new Date(),
				changeFrequency: 'monthly',
				priority: 0.7,
			};
		});
		return [
			...DEFAULT_SITEMAPS,
			...eventsSitemap,
			...recruitmentsSitemap,
			...postsSitemap,
			...membersSitemap,
		] as MetadataRoute.Sitemap;
	} catch (e) {
		return DEFAULT_SITEMAPS;
	}
}
