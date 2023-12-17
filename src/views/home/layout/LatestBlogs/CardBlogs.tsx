import * as React from 'react';
import CardBlog from '@/components/Card/CardBlog';
import { latestPostBlogs } from '@/libs/utils/sortPostBlogyDate';
import { MetadataBlog } from '@/types/mdx';
import CardContainer from '../../../common/CardContainer';

export default function CardBlogs() {
  const latestPosts = latestPostBlogs().slice(0, 3);
  return (
    <CardContainer>
      {latestPosts.map((post) => {
        const data = post.frontMatter as MetadataBlog;

        return <CardBlog data={data} slug={post.slug} />;
      })}
    </CardContainer>
  );
}
