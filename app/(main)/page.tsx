import React from 'react';
import Hero from '@/components/home/Hero';
import Partners from '@/components/home/Partners';
import About from '@/components/home/About';
import Domains from '@/components/home/Domains';
import Recruitment from '@/components/resuable/Recruitment';

import './styles.css';

const Home = () => {
	return (
		<main>
			<Hero />
			<Partners />
			<About />
			<Domains />
			<Recruitment />
		</main>
	);
};

export default Home;
