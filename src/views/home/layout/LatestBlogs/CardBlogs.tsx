import * as React from 'react';
import CardBlog from '@/components/Card/CardBlog';
import { latestBlogPosts } from '@/libs/utils/sortPostBlogyDate';
import { MetadataBlog } from '@/types/mdx';
import CardContainer from '../../../common/CardContainer';

export default function CardBlogs() {
  const latestPosts = latestBlogPosts().slice(0, 3);
  return (
    <CardContainer>
      {latestPosts.map((post) => (
        <CardBlog
          data={post.frontMatter as MetadataBlog}
          slug={post.slug}
          key={post.id}
        />
      ))}
    </CardContainer>
  );
}
