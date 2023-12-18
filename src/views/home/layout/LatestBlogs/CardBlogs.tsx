import * as React from 'react';
import CardBlog from '@/components/Card/CardBlog';
import { latestPostBlogs } from '@/libs/utils/sortPostBlogyDate';
import CardContainer from '../../../common/CardContainer';

export default function CardBlogs() {
  const latestPosts = latestPostBlogs().slice(0, 3);
  return (
    <CardContainer>
      {latestPosts.map((post) => (
        <CardBlog data={post.frontMatter} slug={post.slug} key={post.slug} />
      ))}
    </CardContainer>
  );
}
