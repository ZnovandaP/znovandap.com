import * as React from 'react';
import loadMdXFile from '@/libs/markdown';
import { MdxFileProps, MetadataProject } from '@/types/mdx';
import Container from '@/components/Container';
import PageHeadProject from '@/components/ReadMode/Project/PageHeadProject';
import PageBodyProject from '@/components/ReadMode/Project/PageBodyProject';
import DataNotFoundSection from '@/components/ErrorResponse/DataNotFoundSection';

type DetailProjectViewsProps = {
  slug: string;
};
export default function DetailProjectViews({ slug }: DetailProjectViewsProps) {
  const dataProjectsCollection = loadMdXFile('projects');

  const currentDataProjectPost = dataProjectsCollection.find(
    (post) => post.slug === slug,
  ) as MdxFileProps;

  const frontMatter = currentDataProjectPost?.frontMatter as MetadataProject;

  return (
    <Container
      className="sm:mt-[8.5rem]"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {
        typeof currentDataProjectPost !== 'undefined' && (
          <>
            <PageHeadProject data={frontMatter} />
            <PageBodyProject data={frontMatter} mdxContent={currentDataProjectPost?.content} />
          </>
        )
      }

      {
        typeof currentDataProjectPost === 'undefined' && (
          <DataNotFoundSection type="projects" />
        )
      }
    </Container>
  );
}
