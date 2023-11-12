import React from 'react';

type RecruitmentProps = React.ComponentProps<'section'> & {
	recruitment: EventData;
};

const Recruitment: React.FC<RecruitmentProps> = ({ recruitment }) => {
	return (
		<section className='max-w-7xl w-full p-4 md:p-16'>Recruitment</section>
	);
};

export default Recruitment;
