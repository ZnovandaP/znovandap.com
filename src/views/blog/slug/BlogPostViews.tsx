import * as React from 'react';
import Container from '@/components/Container';
import loadMdXFile from '@/libs/markdown';
import { MetadataBlog } from '@/types/mdx';
import PageHeadBlog from '@/components/ReadMode/Blog/PageHeadBlog';
import PageBodyBlog from '@/components/ReadMode/Blog/PageBodyBlog';
import DataNotFoundSection from '@/components/ErrorResponse/DataNotFoundSection';

type BlogPostViewsProps = {
  slug: string;
};
export default function BlogPostViews({ slug }: BlogPostViewsProps) {
  const dataBlogPostCollection = loadMdXFile('blogs');
  const currentDataBlogPost = dataBlogPostCollection.find(
    (post) => post.slug === slug,
  );

  const frontMatter = currentDataBlogPost?.frontMatter as MetadataBlog;

  return (
    <Container
      className="sm:mt-[8.5rem]"
      data-aos="fade-up"
      data-aos-duration="1000"
    >

      {
        typeof currentDataBlogPost !== 'undefined' && (
          <>
            <PageHeadBlog data={frontMatter} />
            <PageBodyBlog mdxContent={currentDataBlogPost?.content as string} data={frontMatter} />
          </>
        )
      }

      {
        typeof currentDataBlogPost === 'undefined' && (
          <DataNotFoundSection type="blog" />
        )
      }

    </Container>
  );
}
