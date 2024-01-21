import * as React from 'react';
import Container from '@/components/Container';
import { latestProjectPosts, oldestProjectPosts } from '@/libs/utils/sortingPostProjectByDate';
import PrologueProjects from './layout/Prologue';
import ProjectContents from './layout/ProjectContents';

const ProjectPostsortByDate = {
  oldest: oldestProjectPosts(),
  latest: latestProjectPosts(),
};

export default function ProjectsView() {
  return (
    <Container className="sm:mt-[8rem]" data-aos="fade-up" data-aos-duration="700">
      <PrologueProjects />
      <ProjectContents dataProjectPost={ProjectPostsortByDate} />
    </Container>
  );
}
