import * as React from 'react';
import Container from '@/components/Container';
import PrologueBlog from './layout/Prologue';
import BlogContents from './layout/BlogContents';

export default function BlogViews() {
  return (
    <Container className="sm:mt-[8rem]" data-aos="fade-up" data-aos-duration="700">
      <PrologueBlog />
      <BlogContents />
    </Container>
  );
}
