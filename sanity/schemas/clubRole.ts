import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'clubRole',
	title: 'Club Roles',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Role Name',
			description:
				'The name or title of the club role, offering a clear and concise identifier.',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Role Description',
			description:
				'A detailed description of the club role, providing additional context or information about its characteristics or purpose.',
			type: 'text',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			description:
				"A unique identifier used for generating user-friendly URLs. It's automatically derived from the role name.",
			options: {
				source: 'name',
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'order',
			title: 'Priorit Order',
			description:
				'A numerical value representing the priority or order of this role. Lower values indicate higher priority. Use this field to customize the order in which roles are displayed or sorted.',
			type: 'number',
			validation: (Rule) => Rule.required(),
		}),
	],
});
