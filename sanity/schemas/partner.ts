import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'partner',
	title: 'Partners',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Partner Name',
			description:
				'The name or title of the partner, offering a clear and concise identifier.',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Partner Description',
			description:
				'A detailed description of the partner, providing additional context or information about their characteristics or purpose of collaboration.',
			type: 'text',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'website',
			title: 'Partner Website',
			description:
				'The official website URL of the partner. Provide the link to access more information about the partner.',
			type: 'url',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'image',
			title: 'Partner Image',
			type: 'image',
			description:
				'An image associated with the partner, serving as a visual representation. This image helps in identifying and showcasing the partner.',
			validation: (Rule) => Rule.required(),
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alternative Text',
					description:
						'Required for accessibility, the alternative text provides a description of the image, ensuring inclusivity for users with visual impairments.',
					validation: (Rule) => Rule.required(),
				},
			],
		}),
	],
});
