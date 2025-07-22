import * as React from 'react';
import Container from '@/components/Container';
import Prologue from './layout/Prologue';
import LatestProjects from './layout/LatestProjects';
import LatestBlogs from './layout/LatestBlogs';

export default function HomeView() {
  return (
    <Container className="sm:mt-[6rem]">
      <Prologue />
      <LatestProjects />
      <LatestBlogs />
    </Container>
  );
}
