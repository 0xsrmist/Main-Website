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

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;

// Get all team members
export const teamMembersQuery = groq`*[_type == "team"]{
  _id, "slug": slug.current, name, "image": image.asset->url, "alt": image.alt, bio, currentlyWorking, startDate, endDate, role, instagram, twitter, linkedin, website, email, youtube, qualifications
}`;

// Get all domains
export const domainsQuery = groq`*[_type == "domain"]{
  _id, "slug": slug.current, name, "image": image.asset->url, "alt": image.alt, description
}`;
