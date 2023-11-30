import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'notification',
	title: 'Notifications',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Call to Action Title',
			description:
				'The title or heading of the notification, serving as the main call to action for the user.',
			type: 'string',
			validation: (Rule) => Rule.required().min(5).max(100),
		}),
		defineField({
			name: 'description',
			title: 'CTA Description',
			description:
				'A detailed description of the notification, providing additional context or information about the call to action.',
			type: 'text',
			validation: (Rule) => Rule.required().min(5).max(100),
		}),
		defineField({
			name: 'url',
			title: 'CTA Destination',
			description:
				'The destination URL to which the call to action leads. Provide the link for users to navigate when interacting with the notification.',
			type: 'url',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'startDate',
			title: 'Notification Start',
			description:
				'The date and time when the notification becomes active and visible to users.',
			type: 'datetime',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'endDate',
			title: 'Notification Expiry',
			description:
				'The date and time when the notification expires and is no longer visible to users.',
			type: 'datetime',
			validation: (Rule) => Rule.required(),
		}),
	],
});
