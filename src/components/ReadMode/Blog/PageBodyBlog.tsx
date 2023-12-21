import * as React from 'react';
import { MetadataBlog } from '@/types/mdx';
import Line from '../../Decoration/Line';
import ImageHead from '../common/ImageHead';
import ArticleContent from '../common/ArticleContent';
import Tags from '../common/Tags';

type PageBodyProps = {
  data: MetadataBlog
  mdxContent: string
};

export default function PageBodyBlog({ data, mdxContent }: PageBodyProps) {
  return (
    <section className="px-8 pb-0 sm:py-0">
      <ImageHead alt={data.title} src={data.image} />

      <ArticleContent mdxContent={mdxContent} />

      <Line className="my-8" size="sm" />

      <Tags tags={data.tags} />
    </section>
  );
}
