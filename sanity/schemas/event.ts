import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'event',
	title: 'Events',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Event Title',
			description: 'The title or name of the event.',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			description:
				"This is the user-friendly part of the URL for your post. It's derived from the title but can be customized. Slugs make it easier for users to access your post directly.",
			validation: (Rule) => Rule.required(),
			options: {
				source: 'title',
				maxLength: 96,
			},
		}),
		defineField({
			name: 'about',
			title: 'About',
			description: 'A short information or catchphrase about the event.',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Event Description',
			description:
				'A detailed description of the event, providing in-depth information. This content will be shown on the individual event page.',
			type: 'blockContent',
		}),
		defineField({
			name: 'eventType',
			title: 'Event Type',
			description:
				'Select the type of the event. To add more types, contact the tech team.',
			type: 'string',
			options: {
				list: ['recruitment', 'conference', 'hackathon', 'meetup'],
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'mode',
			title: 'Event Mode',
			description: 'Select the mode of the event: online or offline.',
			type: 'string',
			options: {
				list: ['online', 'offline'],
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'location',
			title: 'Event Location (URL)',
			description:
				'The URL or virtual location of the event, or the google map address link. Provide the meet link for online events.',
			type: 'url',
		}),
		defineField({
			name: 'address',
			title: 'Event Address',
			description: 'The physical address of the event for offline mode.',
			type: 'string',
		}),
		defineField({
			name: 'startDate',
			title: 'Event Start Date',
			description: 'The date and time when the event starts.',
			type: 'datetime',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'endDate',
			title: 'Event End Date',
			description: 'The date and time when the event ends.',
			type: 'datetime',
			validation: (Rule) =>
				Rule.required().min(Rule.valueOfField('startDate') as any),
		}),
		defineField({
			name: 'url',
			title: 'Registration URL',
			description:
				'The URL where participants can register for the event. Provide the link for registration.',
			type: 'url',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'coverImage',
			title: 'Event Cover Image',
			description:
				'An image representing the event, displayed as a cover. This image enhances the visual appeal of the event.',
			type: 'image',
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
		defineField({
			name: 'speakers',
			title: 'Speakers',
			description:
				'List of speakers for the event, including their names, images, roles, and links to relevant social media.',
			type: 'array',
			of: [
				{
					type: 'object',
					name: 'speaker',
					fields: [
						{
							name: 'name',
							title: 'Speaker Name',
							type: 'string',
							validation: (Rule) => Rule.required(),
						},
						{
							name: 'image',
							title: 'Speaker Image',
							type: 'image',
							options: {
								hotspot: true,
							},
							validation: (Rule) => Rule.required(),
							fields: [
								{
									name: 'alt',
									type: 'string',
									title: 'Alternative Text',
									validation: (Rule) => Rule.required(),
								},
							],
						},
						{
							name: 'role',
							title: 'Speaker Role',
							type: 'string',
							validation: (Rule) => Rule.required(),
						},
						{
							name: 'url',
							title: 'Social Media Link',
							type: 'url',
						},
					],
				},
			],
		}),
		defineField({
			name: 'imageGallery',
			title: 'Image Gallery',
			description:
				'A gallery of images related to the event, including images, captions, and alternative text.',
			type: 'array',
			of: [
				{
					type: 'object',
					name: 'galleryImage',
					fields: [
						{
							name: 'image',
							title: 'Image',
							type: 'image',
							options: {
								hotspot: true,
							},
							validation: (Rule) => Rule.required(),
							fields: [
								{
									name: 'alt',
									type: 'string',
									title: 'Alternative Text',
									validation: (Rule) => Rule.required(),
								},
							],
						},
						{
							name: 'caption',
							title: 'Caption',
							type: 'string',
							validation: (Rule) => Rule.required(),
						},
					],
				},
			],
		}),
	],
});
