/**
 * Page metadata template — pick ONE of the two variants below.
 *
 * This file shows both shapes side by side so the differences are visible.
 * In real use, delete the variant you don't need.
 *
 * Hard rule: the file containing `metadata` or `generateMetadata` must NOT
 * have `'use client'` at the top. Next.js will silently drop the export.
 * If you need client-side interactivity on the page, move it into a child
 * component and keep this file as a server component.
 */

// =============================================================================
// VARIANT A — Static metadata (use for routes whose content is known at build)
// =============================================================================

export const metadata = {
  title: 'About',                            // becomes "About | Brand" via template
  description: 'What this page is about.',
  alternates: { canonical: '/about' },
  openGraph: {
    // openGraph.title does NOT inherit from the top-level `title`.
    // Set it explicitly or the social card title will be blank.
    title: 'About',
    description: 'What this page is about.',
    url: '/about',                           // relative is fine — metadataBase resolves it
    // images: ['/og/about.png'],           // optional override; usually a sibling
                                             // opengraph-image.{png,jpg,jsx} is simpler
  },
  twitter: {
    title: 'About',
    description: 'What this page is about.',
  },
};

export default function AboutPage() {
  return <main>About</main>;
}

// =============================================================================
// VARIANT B — Dynamic metadata (use for [slug], [id], etc.)
// =============================================================================
//
// Wrap the data fetch in React's `cache()` so generateMetadata and the page
// component share a single network/database call instead of duplicating it.
// Without `cache()` the same fetch runs twice per request.
//
// import { cache } from 'react';
// import { getPost } from '@/lib/posts';
//
// const loadPost = cache(getPost);
//
// export async function generateMetadata({ params }) {
//   const { slug } = await params;        // Next 15+: params is a Promise
//   const post = await loadPost(slug);
//   if (!post) return { title: 'Not found' };
//
//   return {
//     title: post.title,
//     description: post.summary,
//     alternates: { canonical: `/posts/${slug}` },
//     openGraph: {
//       title: post.title,
//       description: post.summary,
//       url: `/posts/${slug}`,
//       type: 'article',
//       publishedTime: post.publishedAt,
//       authors: post.authors,
//       // images: optional — usually handled by a sibling
//       // opengraph-image.jsx in this same folder. See opengraph-image-dynamic.jsx.
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: post.title,
//       description: post.summary,
//     },
//   };
// }
//
// export default async function PostPage({ params }) {
//   const { slug } = await params;
//   const post = await loadPost(slug);     // cached, same data as metadata
//   return <article>{post.title}</article>;
// }
