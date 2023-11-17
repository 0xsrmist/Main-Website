import { TPH_TERMS_AND_CONDITIONS } from '@/constants/tph';
import React from 'react';

const TermsAndConditions = () => {
	return (
		<main className='p-4 md:p-16'>
			<section className='w-full max-w-7xl mx-auto mt-20'>
				<h1 className='uppercase text-4xl md:text-5xl lg:text-6xl leading-tight font-bold mt-4'>
					Terms & Conditions
				</h1>
				<hr className='border-b-4 max-w-[10rem] border-b-app-primary rounded-lg mt-2' />
				<p className='mt-4'>Effective Date: 12th Nov. 2023</p>
				<h2 className='text-base md:text-lg lg:text-xl mt-2'>
					Welcome to TPHxSRMIST&apos;s website. By accessing and using
					this website, you agree to comply with and be bound by these
					Terms and Conditions. Please read the following terms
					carefully.
				</h2>
			</section>
			<section className='w-full max-w-7xl mx-auto mt-8'>
				<ul className='list-disc ml-4'>
					{TPH_TERMS_AND_CONDITIONS.map((toc, index) => (
						<li key={`toc-${index} block`}>
							<h3 className='font-medium'>{toc.title}</h3>
							<ul className='ml-4'>
								{toc.descriptions.map((desc, index2) => (
									<li key={`toc-${index}-${index2}`}>
										{desc}
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
				<p className='mt-4'>
					By using our website, you acknowledge that you have read,
					understood, and agreed to these Terms and Conditions. If you
					do not agree to these terms, please do not use our website.
				</p>
			</section>
		</main>
	);
};

export default TermsAndConditions;
