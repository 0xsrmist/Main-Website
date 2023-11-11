import React from 'react';
import Hero from '@/components/home/Hero';
import Partners from '@/components/home/Partners';
import About from '@/components/home/About';
import Domains from '@/components/home/Domains';
import Recruitment from '@/components/resuable/Recruitment';

import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { domainsQuery, partnersQuery } from '@/sanity/lib/queries';

import './styles.css';

const Home = async () => {
	const domains = await sanityFetch<Domain[]>({ query: domainsQuery });
	const partners = await sanityFetch<Partner[]>({ query: partnersQuery });

	return (
		<main>
			<Hero />
			<Partners partners={partners} />
			<About />
			<Domains domains={domains} />
			<Recruitment />
		</main>
	);
};

export default Home;
