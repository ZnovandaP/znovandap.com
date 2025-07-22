import * as React from 'react';
import Container from '@/components/Container';
import { latestBlogPosts, oldestBlogPosts } from '@/libs/utils/sortPostBlogyDate';
import PrologueBlog from './layout/Prologue';
import BlogContents from './layout/BlogContents';

const blogPostsortByDate = {
  oldest: oldestBlogPosts(),
  latest: latestBlogPosts(),
};

export default function BlogViews() {
  return (
    <Container className="sm:mt-[6rem]" data-aos="fade-up" data-aos-duration="700">
      <PrologueBlog />
      <BlogContents
        dataBlogPost={blogPostsortByDate}
      />
    </Container>
  );
}
