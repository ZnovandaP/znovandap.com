import * as React from 'react';
import ProjectsView from '@/views/projects';
import { latestPostProjects, oldestPostProjects } from '@/libs/utils/sortingPostProjectByDate';

const dataSort = {
  oldest: latestPostProjects(),
  latest: oldestPostProjects(),
};

export default function ProjectsPage() {
  return (
    <ProjectsView dataSort={dataSort} />
  );
}
