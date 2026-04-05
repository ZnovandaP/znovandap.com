import * as React from 'react';
import Container from '@/components/Container';
import { latestBlogPosts, oldestBlogPosts } from '@/libs/utils/sortPostBlogyDate';
import PrologueBlog from './layout/Prologue';
import BlogContents from './layout/BlogContents';

export default function BlogViews() {
  const blogPostsortByDate = {
  oldest: oldestBlogPosts(),
  latest: latestBlogPosts(),
};
  return (
    <Container className="sm:mt-[3rem]" data-aos="fade-up" data-aos-duration="700">
      <PrologueBlog />
      <BlogContents
        dataBlogPost={blogPostsortByDate}
      />
    </Container>
  );
}
