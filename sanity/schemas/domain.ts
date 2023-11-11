import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'domain',
	title: 'Domains',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			description:
				'The name or title of the domain, offering a clear and concise identifier.',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Description',
			description:
				'A detailed description of the domain, providing additional context or information about its characteristics or purpose.',
			type: 'text',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			description:
				"A unique identifier used for generating user-friendly URLs. It's automatically derived from the title.",
			options: {
				source: 'name',
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			description:
				'An image associated with the domain, serving as a visual representation. This image helps in identifying and categorizing domains.',
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
