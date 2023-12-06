/**
 * Contact Page
 */

// Dependencies
import React from 'react';
import Hero from '@/components/contact/Hero';
import FAQs from '@/components/contact/FAQs';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { faqsQuery } from '@/sanity/lib/queries';

const Contact = async () => {
	const faqs = await sanityFetch<FAQData[]>({ query: faqsQuery });

	return (
		<main className='w-full p-4 md:p-16 overflow-hidden'>
			<Hero />
			<FAQs faqs={faqs} />
		</main>
	);
};

export default Contact;
