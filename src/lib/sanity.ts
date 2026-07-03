import { createClient } from "@sanity/client";
import imageUrlBuilder, { type SanityImageSource } from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION,
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export type PostSummary = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  coverImage?: SanityImageSource;
  publishedAt: string;
  tags?: string[];
};

export type CodeBlock = {
  _type: "code";
  _key: string;
  language?: string;
  code: string;
};

export type PostDetail = PostSummary & {
  body: unknown[];
};

const postFields = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  coverImage,
  publishedAt,
  tags
`;

export const postsQuery = `*[_type == "post" && defined(publishedAt) && publishedAt <= now()] | order(publishedAt desc) {
  ${postFields}
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug && defined(publishedAt) && publishedAt <= now()][0] {
  ${postFields},
  body
}`;
