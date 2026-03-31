import * as React from 'react';
import Container from '@/components/Container';
import { latestProjectPosts, oldestProjectPosts } from '@/libs/utils/sortingPostProjectByDate';
import PrologueProjects from './layout/Prologue';
import ProjectContents from './layout/ProjectContents';


export default function ProjectsView() {
  const ProjectPostsortByDate = {
    oldest: oldestProjectPosts(),
    latest: latestProjectPosts(),
  };
  return (
    <Container className="sm:mt-[6rem]" data-aos="fade-up" data-aos-duration="700">
      <PrologueProjects />
      <ProjectContents dataProjectPost={ProjectPostsortByDate} />
    </Container>
  );
}
