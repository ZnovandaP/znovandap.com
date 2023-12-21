import * as React from 'react';
import BlogPostViews from '@/views/blog/slug';
import { Metadata } from 'next';
import loadMdXFile from '@/libs/markdown';
import { MdxFileProps, MetadataBlog } from '@/types/mdx';
import METADATA from '@/constant/metadata';

type BlogPostPageProps = {
  params: { slug: string }
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const blog = await loadMdXFile()
    .find((post) => post.slug === params.slug) as MdxFileProps;

  const frontMatter = blog.frontMatter as MetadataBlog;

  return {
    title: `${frontMatter.title} ${METADATA.exTitle}`,
    description: frontMatter.subtitle,
    openGraph: {
      images: frontMatter.image,
      url: `${process.env.DOMAIN}/${blog.slug}`,
      siteName: METADATA.openGraph.siteName,
      locale: METADATA.openGraph.locale,
      type: 'article',
      authors: 'Zidane Novanda Putra',
    },
    keywords: frontMatter.title,
    alternates: {
      canonical: `${process.env.DOMAIN}/blog/post/${blog.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <BlogPostViews slug={params.slug} />
  );
}
