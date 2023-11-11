import React from 'react';

type PartnersProps = React.ComponentProps<'section'> & {
	partners: Partner[];
};

const Partners: React.FC<PartnersProps> = ({ partners }) => {
	return <section>Partners</section>;
};

export default Partners;
