import { MetadataRoute } from 'next';
import { TPH_WEBSITE_URL } from '@/constants/tph';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/api/', '/studio/'],
		},
		sitemap: `${TPH_WEBSITE_URL}/sitemap.xml`,
	};
}
