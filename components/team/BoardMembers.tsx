/**
 * BoardMember Component - Team Page
 */

// Dependecies
import React from 'react';
import TeamMemberCard from '../cards/TeamMember';

type BoardMemberProps = React.ComponentProps<'section'> & {
	members: Record<CLUB_ROLES, TeamMember[]>;
};

const BoardMember: React.FC<BoardMemberProps> = ({ members }) => {
	return (
		<section className='w-full mt-4 md:mt-12 max-w-7xl mx-auto text-center'>
			<section className='mt-16'>
				<h2 className='uppercase text-xl md:text-2xl lg:text-3xl font-medium'>
					Club <span className='text-app-primary'>Board Members</span>
				</h2>
				<ul className='w-full flex flex-wrap items-center justify-evenly gap-8 mt-8'>
					{members['board-member'].map((member) => (
						<TeamMemberCard member={member} key={member._id} />
					))}
				</ul>
			</section>
		</section>
	);
};

export default BoardMember;
