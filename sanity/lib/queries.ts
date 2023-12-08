// ./nextjs-app/sanity/lib/queries.ts

import { groq } from 'next-sanity';

// Get all posts
export const postsQuery = groq`*[_type == "post"]{
  ..., "slug": slug.current, "image": mainImage.asset->url, "alt": mainImage.alt, categories[]->{..., "slug": slug.current}, author->
} | order(publishedAt desc) | order(featured asc)`;

// Get all featured posts
export const featuredPostsQuery = groq`*[_type == "post" && featured == true]{
..., "slug": slug.current, "image": mainImage.asset->url, "alt": mainImage.alt, categories[]->{..., "slug": slug.current}, author->
} | order(publishedAt desc)`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
  ..., "slug": slug.current, "image": mainImage.asset->url, "alt": mainImage.alt, body, author->{"image": image.asset->url, "alt": image.alt, name, "slug": slug.current}, categories[]->{title, "slug": slug.current}
}`;

// Get a single event by its slug
export const eventQeury = groq`*[_type == "event" && eventType != "recruitment" && slug.current == $slug][0]{
  ..., "slug": slug.current, "coverImage": coverImage.asset->url, "coverImageAlt": coverImage.alt, "imageGallery": imageGallery[]{..., "image": image.asset->url, "alt": image.alt }, "speakers": speakers[]{..., "image": image.asset->url, "alt": image.alt}, (startDate <= now() && endDate >= now()) => {"status": "ongoing"}, (startDate >= now() && endDate >= now()) => {"status": "upcoming"}, (startDate <= now() && endDate <= now()) => {"status": "completed"}
}`;

// Get a single team member by its lug
export const teamMemberQuery = groq`*[_type == "team" && slug.current == $slug][0]{
  ..., "slug": slug.current, "image": image.asset->url, "alt": image.alt, "domain": domain->{..., "slug": slug.current, "image": image.asset->url, "alt": image.alt}, "role": role->{..., "slug": slug.current}
}`;

// Get a single recruitment by its slug
export const recruitmentQuery = groq`*[_type == "event" && eventType == "recruitment" && slug.current == $slug][0]{
  ..., "slug": slug.current, "coverImage": coverImage.asset->url, "coverImageAlt": coverImage.alt, "imageGallery": imageGallery[]{..., "image": image.asset->url, "alt": image.alt }, "speakers": speakers[]{..., "image": image.asset->url, "alt": image.alt}, (startDate <= now() && endDate >= now()) => {"status": "ongoing"}, (startDate >= now() && endDate >= now()) => {"status": "upcoming"}, (startDate <= now() && endDate <= now()) => {"status": "completed"}
}`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;

// Get all event slugs
export const eventPathsQuery = groq`*[_type == "event" && eventType != "recruitment" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;

// Get all recruitment slugs
export const recruitmentPathsQuery = groq`*[_type == "event" && eventType == "recruitment" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;

// Get all team member slugs
export const teamMemberPathsQuery = groq`*[_type == "team" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;

// Get all team members
export const teamMembersQuery = groq`*[_type == "team" && currentlyWorking == true]{
  ..., "slug": slug.current, "image": image.asset->url, "alt": image.alt, "domain": domain->{..., "slug": slug.current}, "role": role->{..., "slug": slug.current}
} | order(role->order desc)`;

// Get all team alumni
export const teamAlumnisQuery = groq`*[_type == "team" && currentlyWorking == false]{
  ..., "slug": slug.current, "image": image.asset->url, "alt": image.alt, "domain": domain->{..., "slug": slug.current}, "role": role->{..., "slug": slug.current}
} | order(role->order desc)`;

// Get all domains
export const domainsQuery = groq`*[_type == "domain"]{
  ..., "slug": slug.current, "image": image.asset->url, "alt": image.alt
}`;

// Get all partners
export const partnersQuery = groq`*[_type == "partner"]{
  ..., "image": image.asset->url, "alt": image.alt
}`;

// Get all active notifications
export const activeNotificationsQuery = groq`*[_type == "notification" && startDate <= now() && endDate >= now()]{ ... }`;

// Get latest recruitment event
export const latestRecruitmentEventQuery = groq`*[_type == "event" && eventType == "recruitment" && startDate >= now() && endDate >= now()]{
  ..., "slug": slug.current, "coverImage": coverImage.asset->url, "coverImageAlt": coverImage.alt, (startDate <= now() && endDate >= now()) => {"status": "ongoing"}, (startDate >= now() && endDate >= now()) => {"status": "upcoming"}, (startDate <= now() && endDate <= now()) => {"status": "completed"}
} | order(startDate asc) [0]`;

// Get all completed recruitments
export const pastRecruitmentEventsQuery = groq`*[_type == "event" && eventType == "recruitment" && startDate <= now() && endDate <= now()]{
  ..., "slug": slug.current, "coverImage": coverImage.asset->url, "coverImageAlt": coverImage.alt, (startDate <= now() && endDate >= now()) => {"status": "ongoing"}, (startDate >= now() && endDate >= now()) => {"status": "upcoming"}, (startDate <= now() && endDate <= now()) => {"status": "completed"}
} | order(endDate desc)`;

// Get all events
export const eventsQuery = groq`*[_type == "event" && eventType != "recruitment"]{
  ..., "slug": slug.current, "coverImage": coverImage.asset->url, "coverImageAlt": coverImage.alt, (startDate <= now() && endDate >= now()) => {"status": "ongoing"}, (startDate >= now() && endDate >= now()) => {"status": "upcoming"}, (startDate <= now() && endDate <= now()) => {"status": "completed"}
} | order(endDate desc)`;

// Get all latest events
export const latestEventsQuery = groq`*[_type == "event" && eventType != "recruitment"]{
  ..., "slug": slug.current, "coverImage": coverImage.asset->url, "coverImageAlt": coverImage.alt, (startDate <= now() && endDate >= now()) => {"status": "ongoing"}, (startDate >= now() && endDate >= now()) => {"status": "upcoming"}, (startDate <= now() && endDate <= now()) => {"status": "completed"}
} | order(endDate desc) [0..2]`;

// Get all FAQs
export const faqsQuery = groq`*[_type == "faq"]{ ... } | order(order asc)`;
