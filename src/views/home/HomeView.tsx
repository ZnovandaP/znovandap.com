import * as React from 'react';
import Container from '@/components/Container';
import Prologue from './layout/Prologue';
import LastProjects from './layout/LastProjects';
import LatestBlogs from './layout/LatestBlogs';

export default function HomeView() {
  return (
    <Container className="sm:mt-[8rem]">
      <Prologue />
      <LastProjects />
      <LatestBlogs />
    </Container>
  );
}
