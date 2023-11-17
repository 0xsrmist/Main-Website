import { client } from '@/sanity/lib/client';
import { eventPathsQuery, teamMemberPathsQuery } from '@/sanity/lib/queries';
import { MetadataRoute } from 'next';
import { TPH_WEBSITE_URL } from '@/constants/tph';

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
		const events = await client.fetch<Array<{ params: { slug: string } }>>(
			eventPathsQuery
		);
		const eventsSitemap = events.map((event) => {
			return {
				url: `${TPH_WEBSITE_URL}/${event.params.slug}`,
				lastModified: new Date(),
				changeFrequency: 'monthly',
				priority: 0.8,
			};
		});
		const members = await client.fetch<Array<{ params: { slug: string } }>>(
			teamMemberPathsQuery
		);
		const membersSitemap = members.map((member) => {
			return {
				url: `${TPH_WEBSITE_URL}/${member.params.slug}`,
				lastModified: new Date(),
				changeFrequency: 'monthly',
				priority: 0.7,
			};
		});
		return [
			...DEFAULT_SITEMAPS,
			...eventsSitemap,
			...membersSitemap,
		] as MetadataRoute.Sitemap;
	} catch (e) {
		return DEFAULT_SITEMAPS;
	}
}
