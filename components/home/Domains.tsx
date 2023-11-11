import React from 'react';

type DomainsProps = React.ComponentProps<'section'> & {
	domains: Domain[];
};

const Domains: React.FC<DomainsProps> = ({ domains }) => {
	return <div>Domains</div>;
};

export default Domains;
