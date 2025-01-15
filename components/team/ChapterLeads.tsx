/**
 * ChapterLeads Component - Team Page
 */

// Dependecies
import React from 'react';
import TeamMemberCard from '../cards/TeamMember';

type ChapterLeadsProps = React.ComponentProps<'section'> & {
	members: Record<CLUB_ROLES, TeamMember[]>;
};

const ChapterLeads: React.FC<ChapterLeadsProps> = ({ members }) => {
	return (
		<section className='w-full mt-4 md:mt-12 max-w-7xl mx-auto text-center'>
			<section className='mt-16'>
				<h2 className='uppercase text-xl md:text-2xl lg:text-3xl font-medium'>
					Club <span className='text-app-primary'>Chapter Leads</span>
				</h2>
				<ul className='w-full flex flex-wrap items-center justify-evenly gap-8 mt-8'>
					{members['chapter-leads'].map((member) => (
						<TeamMemberCard member={member} key={member._id} />
					))}
				</ul>
				
			</section>
		</section>
	);
};

export default ChapterLeads;
