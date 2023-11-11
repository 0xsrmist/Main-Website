import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemas/blockContent';
import category from './schemas/category';
import post from './schemas/post';
import author from './schemas/team';
import domain from './schemas/domain';
import clubRole from './schemas/clubRole';
import partner from './schemas/partner';
import notification from './schemas/notification';
import event from './schemas/event';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		post,
		author,
		category,
		blockContent,
		domain,
		clubRole,
		partner,
		notification,
		event,
	],
};
