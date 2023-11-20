import React from 'react';
import TeamMemberCard from '../cards/TeamMember';

type PresidentsProps = React.ComponentProps<'section'> & {
	members: Record<CLUB_ROLES, TeamMember[]>;
};

const Presidents: React.FC<PresidentsProps> = ({ members }) => {
	return (
		<section className='w-full mt-4 md:mt-12 max-w-7xl mx-auto text-center'>
			<section className='mt-16'>
				<h2 className='uppercase text-base md:text-lg lg:text-xl font-medium'>
					Club <span className='text-app-primary'>presidents</span>
				</h2>
				<ul className='w-full flex flex-wrap items-center justify-center gap-8 mt-4'>
					{members['president'].map((member) => (
						<TeamMemberCard member={member} key={member._id} />
					))}
					{members['vice-president'].map((member) => (
						<TeamMemberCard member={member} key={member._id} />
					))}
				</ul>
			</section>
		</section>
	);
};

export default Presidents;
