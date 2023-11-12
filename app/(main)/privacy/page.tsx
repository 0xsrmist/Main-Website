import { TPH_PRIVACY_POLICY } from '@/constants/tph';
import React from 'react';

const PrivacyPolicy = () => {
	return (
		<main className='p-4 md:p-16'>
			<section className='w-full max-w-7xl mx-auto mt-16'>
				<h1 className='uppercase text-xl md:text-2xl lg:text-4xl leading-tight font-bold mt-4'>
					Privacy Policy
				</h1>
				<hr className='border-b-4 max-w-[10rem] border-b-app-primary rounded-lg mt-2' />
				<p className='mt-4'>Effective Date: 12th Nov. 2023</p>
				<h2 className='text-base md:text-lg lg:text-xl mt-2'>
					At TPHxSRMIST, your privacy is of utmost importance to us.
					This Privacy Policy outlines how we collect, use, disclose,
					and protect your personal information when you visit our
					website or interact with us through our contact form. By
					using our website and providing your information, you
					consent to the practices described in this policy.
				</h2>
			</section>
			<section className='w-full max-w-7xl mx-auto mt-8'>
				<ul className='list-disc ml-4'>
					{TPH_PRIVACY_POLICY.map((pp, index) => (
						<li key={`pp-${index} block`}>
							<h3 className='font-medium'>{pp.title}</h3>
							<ul className='ml-4'>
								{pp.descriptions.map((desc, index2) => (
									<li key={`pp-${index}-${index2}`}>
										{desc}
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
				<p className='mt-4'>
					By using our website, you acknowledge that you have read,
					understood, and agreed to these Privacy Policies. If you do
					not agree to these terms, please do not use our website.
				</p>
			</section>
		</main>
	);
};

export default PrivacyPolicy;
