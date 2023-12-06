/**
 * FAQs Component - Contact Page
 */

// Dependecies
import React from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

type FAQsProps = React.ComponentProps<'section'> & {
	faqs: FAQData[];
};

const FAQs: React.FC<FAQsProps> = ({ faqs }) => {
	return (
		<section
			className='mt-20 flex items-center justify-center flex-col'
			id='faqs'
		>
			<h2 className='capitalize text-4xl md:text-5xl lg:text-6xl leading-tight font-bold'>
				Frequently Asked questions
			</h2>
			<Accordion
				type='single'
				collapsible
				className='max-w-3xl w-full mt-8'
			>
				{faqs.map((faq) => (
					<AccordionItem
						key={faq._id}
						value={faq._id}
						className='border-app-primary/40 border-2 rounded-2xl my-4 px-4 text-left'
					>
						<AccordionTrigger className='hover:text-app-primary hover:no-underline text-left'>
							{faq.question}
						</AccordionTrigger>
						<AccordionContent>{faq.answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</section>
	);
};

export default FAQs;
