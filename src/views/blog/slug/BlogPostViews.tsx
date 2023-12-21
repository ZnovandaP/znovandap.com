import * as React from 'react';
import Container from '@/components/Container';
import loadMdXFile from '@/libs/markdown';
import { MetadataBlog } from '@/types/mdx';
import PageHeadBlog from '@/components/ReadMode/Blog/PageHeadBlog';
import PageBodyBlog from '@/components/ReadMode/Blog/PageBodyBlog';

type BlogPostViewsProps = {
  slug: string;
};
export default function BlogPostViews({ slug }: BlogPostViewsProps) {
  const dataBlogPostCollection = loadMdXFile('blogs');
  const currentDataBlogPost = dataBlogPostCollection.find(
    (post) => post.slug === slug,
  );
  return (
    <Container
      className="sm:mt-[8.5rem]"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <PageHeadBlog data={currentDataBlogPost?.frontMatter as MetadataBlog} />
      <PageBodyBlog
        mdxContent={currentDataBlogPost?.content as string}
        data={currentDataBlogPost?.frontMatter as MetadataBlog}
      />
    </Container>
  );
}
