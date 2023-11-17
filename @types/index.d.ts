type Category = Readonly<{
	_id: string;
	title: string;
	slug: string;
	description?: string;
}>;

type Domain = Readonly<{
	_id: string;
	name: string;
	description: string;
	slug: string;
	image: string;
	alt: string;
}>;

type ClubRole = Readonly<{
	_id: string;
	name: string;
	description: string;
	slug: string;
}>;

type TeamMember = Readonly<{
	_id: string;
	name: string;
	slug: string;
	image: string;
	alt: string;
	qualifications?: string;
	bio?: string;
	currentlyWorking: boolean;
	startDate?: Date;
	endDate?: Date;
	domain: Domain;
	role: ClubRole;
	languages?: string[];
	instagram?: string;
	twitter?: string;
	linkedin?: string;
	website?: string;
	email?: string;
	youtube?: string;
}>;

type BlogPost = Readonly<{
	_id: string;
	title: string;
	description: string;
	slug: string;
	author: TeamMember;
	image?: string;
	alt?: string;
	categories?: Category[];
	featured: boolean;
	publishedAt: Date;
	body?: TypedObject | TypedObject[];
}>;

type Partner = Readonly<{
	_id: string;
	name: string;
	description: string;
	website: string;
	image: string;
	alt: string;
}>;

type NotificationData = Readonly<{
	_id: string;
	title: string;
	description: string;
	url: string;
	startDate: Date;
	endDate: Date;
}>;

type EventData = Readonly<{
	_id: string;
	title: string;
	slug: string;
	about: string;
	description?: TypedObject | TypedObject[];
	eventType: 'recrruitment' | 'conference' | 'hackathon' | 'meetup';
	mode: 'online' | 'offline';
	url: string;
	startDate: Date;
	endDate: Date;
	location?: url;
	coverImage: string;
	coverImageAlt: string;
	status: 'ongoing' | 'completed' | 'upcoming';
	address?: string;
	speakers?: Array<{
		name: string;
		image: string;
		alt: string;
		role: string;
		url?: string;
	}>;
	imageGallery?: Array<{
		caption: string;
		image: string;
		alt: string;
	}>;
}>;

type LegalDataBase = Readonly<{
	title: string;
	descriptions: Array<string>;
}>;

type TermsAndConditionsData = ReadonlyArray<LegalDataBase>;

type PrivacyPolicyData = ReadonlyArray<LegalDataBase>;

type FAQData = Readonly<{
	_id: string;
	question: string;
	answer: string;
	order: number;
}>;

type CLUB_ROLES = 'co-founder' | 'head' | 'lead' | 'member';
