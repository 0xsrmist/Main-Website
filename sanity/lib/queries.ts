// ./nextjs-app/sanity/lib/queries.ts

import { groq } from 'next-sanity';

// Get all posts
export const postsQuery = groq`*[_type == "post"]{
  _id, title, "slug": slug.current, "image": mainImage.asset->url, "alt": mainImage.alt, categories[]->{title, "slug": slug.current}, publishedAt, description, author->
} | order(publishedAt desc) | order(featured asc)`;

// Get all featured posts
export const featuredPostsQuery = groq`*[_type == "post" && featured == true]{
_id, title, "slug": slug.current, "image": mainImage.asset->url, "alt": mainImage.alt, categories[]->{title, "slug": slug.current}, description, publishedAt, author->
} | order(publishedAt desc)`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
  _id, "slug": slug.current, title, "image": mainImage.asset->url, "alt": mainImage.alt, body, author->{"image": image.asset->url, "alt": image.alt, name, "slug": slug.current}, categories[]->{title, "slug": slug.current}, publishedAt, description
}`;

// Get a single event by its slug
export const eventQeury = groq`*[_type == "event" && slug.current == $slug][0]{
  _id, "slug": slug.current, title, about, description, eventType, description, mode, location, address, startDate, endDate, url, "coverImage": coverImage.asset->url, "coverImageAlt": coverImage.alt, "imageGallery": imageGallery[]{"image": image.asset->url, "alt": image.alt, caption }, "speakers": speakers[]{name, role, "image": image.asset->url, "alt": image.alt, url}, "ongoing": startDate <= now() && endDate >= now()
}`;

// Get a single team member by its lug
export const teamMemberQuery = groq`*[_type == "team" && slug.current == $slug][0]{
  _id, "slug": slug.current, name, "image": image.asset->url, "alt": image.alt, bio, currentlyWorking, startDate, endDate, instagram, twitter, linkedin, website, email, youtube, qualifications, "domain": domain->{name, description, "slug": slug.current, "image": image.asset->url, "alt": image.alt}, "role": role->{name, "slug": slug.current, description}
}`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;

// Get all event slugs
export const eventPathsQuery = groq`*[_type == "event" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;

// Get all team member slugs
export const teamMemberPathsQuery = groq`*[_type == "team" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;

// Get all team members
export const teamMembersQuery = groq`*[_type == "team"]{
  _id, "slug": slug.current, name, "image": image.asset->url, "alt": image.alt, bio, currentlyWorking, startDate, endDate, instagram, twitter, linkedin, website, email, youtube, qualifications, "domain": domain->{name, description, "slug": slug.current}, "role": role->{name, "slug": slug.current, description}
} | order(role->order asc)`;

// Get all domains
export const domainsQuery = groq`*[_type == "domain"]{
  _id, "slug": slug.current, name, "image": image.asset->url, "alt": image.alt, description
}`;

// Get all partners
export const partnersQuery = groq`*[_type == "partner"]{
  _id, name, "image": image.asset->url, "alt": image.alt, description, website
}`;

// Get all active notifications
export const activeNotificationsQuery = groq`*[_type == "notification" && startDate <= now() && endDate >= now()]{
  _id, title, description, url, startDate, endDate
}`;

// Get latest recruitment event
export const latestRecruitmentEventQuery = groq`*[_type == "event" && eventType == "recruitment" && startDate <= now() && endDate >= now()]{
  _id, "slug": slug.current, title, about, description, eventType, mode, location, address, startDate, endDate, url, "coverImage": coverImage.asset->url, "coverImageAlt": coverImage.alt, (startDate <= now() && endDate >= now()) => {"status": "ongoing"}, (startDate >= now() && endDate >= now()) => {"status": "upcoming"}, (startDate <= now() && endDate <= now()) => {"status": "completed"}
} | order(startDate asc) [0]`;

// Get all events
export const eventsQuery = groq`*[_type == "event" && eventType != "recruitment"]{
  _id, "slug": slug.current, title, about, description, eventType, description, mode, location, address, startDate, endDate, url, "coverImage": coverImage.asset->url, "coverImageAlt": coverImage.alt, (startDate <= now() && endDate >= now()) => {"status": "ongoing"}, (startDate >= now() && endDate >= now()) => {"status": "upcoming"}, (startDate <= now() && endDate <= now()) => {"status": "completed"}
} | order(endDate desc)`;

// Get all latest events
export const latestEventsQuery = groq`*[_type == "event" && eventType != "recruitment"]{
  _id, "slug": slug.current, title, about, description, eventType, description, mode, location, address, startDate, endDate, url, "coverImage": coverImage.asset->url, "coverImageAlt": coverImage.alt, (startDate <= now() && endDate >= now()) => {"status": "ongoing"}, (startDate >= now() && endDate >= now()) => {"status": "upcoming"}, (startDate <= now() && endDate <= now()) => {"status": "completed"}
} | order(endDate desc) [0..2]`;

// Get all FAQs
export const faqsQuery = groq`*[_type == "faq"]{
  _id, question, answer
}`;
