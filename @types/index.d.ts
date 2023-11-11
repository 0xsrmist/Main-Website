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
