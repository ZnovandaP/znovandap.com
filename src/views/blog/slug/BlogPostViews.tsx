import * as React from 'react';
import Container from '@/components/Container';
import PageHead from '@/components/ReadMode/PageHead';
import loadMdXFile from '@/libs/markdown';
import { MetadataBlog } from '@/types/mdx';
import PageBody from '@/components/ReadMode/PageBody';

type BlogPostViewsProps = {
  slug: string
};
export default function BlogPostViews({ slug }: BlogPostViewsProps) {
  const dataBlogPostCollection = loadMdXFile('blogs');
  const currentDataBlogPost = dataBlogPostCollection.find((post) => post.slug === slug);
  return (
    <Container className="sm:mt-[8.5rem]" data-aos="fade-up" data-aos-duration="1000">
      <PageHead data={currentDataBlogPost?.frontMatter as MetadataBlog} />
      <PageBody
        page="blog"
        mdxContent={currentDataBlogPost?.content as string}
        data={currentDataBlogPost?.frontMatter as MetadataBlog}
      />
    </Container>
  );
}
