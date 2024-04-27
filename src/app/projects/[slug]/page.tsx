import * as React from 'react';
import { Metadata } from 'next';
import METADATA from '@/constant/metadata';
import loadMdXFile from '@/libs/markdown';
import { MdxFileProps, MetadataProject } from '@/types/mdx';
import DetailProjectViews from '@/views/projects/slug';

type DetailProjectsPageProps = {
  params: { slug: string }
};

export async function generateStaticParams() {
  const projects = loadMdXFile('projects');

  const params = projects.map((project) => ({
    slug: project.slug,
  }));

  return params;
}

export async function generateMetadata({ params }: DetailProjectsPageProps): Promise<Metadata> {
  const project = await loadMdXFile('projects')
    .find((post) => post.slug === params.slug) as MdxFileProps;

  const frontMatter = project?.frontMatter as MetadataProject;

  return {
    title: `${frontMatter?.title || 'Project Not Found'} ${METADATA.exTitle}`,
    description: frontMatter?.subtitle || 'Project subtitle not found',
    openGraph: {
      images: frontMatter?.thumbnail || 'Image project not found',
      url: `${process.env.DOMAIN}/${project?.slug || ''}`,
      siteName: METADATA.openGraph.siteName,
      locale: METADATA.openGraph.locale,
      type: 'article',
      authors: 'Zidane Novanda Putra',
    },
    keywords: frontMatter?.title || 'Project Not Found',
    alternates: {
      canonical: `${process.env.DOMAIN}/projects/${project?.slug || ''}`,
    },
  };
}

export default function DetailProjectsPage({ params }: DetailProjectsPageProps) {
  return (
    <DetailProjectViews slug={params.slug} />
  );
}
