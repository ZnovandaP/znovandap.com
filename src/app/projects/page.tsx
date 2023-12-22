import * as React from 'react';
import ProjectsView from '@/views/projects';
import { latestPostProjects, oldestPostProjects } from '@/libs/utils/sortingPostProjectByDate';

const dataSort = {
  oldest: oldestPostProjects(),
  latest: latestPostProjects(),
};

export default function ProjectsPage() {
  return (
    <ProjectsView dataSort={dataSort} />
  );
}
