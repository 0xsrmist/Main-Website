import React from 'react';
import DomainCard from '../cards/DomainCard';

type DomainsProps = React.ComponentProps<'section'> & {
	domains: Domain[];
};

const Domains: React.FC<DomainsProps> = ({ domains }) => {
	return (
		<section className='w-full max-w-7xl mx-auto flex items-center justify-center flex-col p-4 md:p-16'>
			<h2 className='uppercase text-xl md:text-2xl lg:text-4xl leading-tight font-bold'>
				Domains
			</h2>
			<ul className='flex w-full items-center justify-evenly flex-wrap gap-8 mt-8'>
				{domains.map((domain) => (
					<DomainCard
						key={`landing-domain-${domain._id}`}
						domain={domain}
					/>
				))}
			</ul>
		</section>
	);
};

export default Domains;
