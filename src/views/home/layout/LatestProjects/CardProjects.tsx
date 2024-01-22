import * as React from 'react';
import { MetadataProject } from '@/types/mdx';
import { latestProjectPosts } from '@/libs/utils/sortingPostProjectByDate';
import CardProject from '@/components/Card/CardProject';
import CardContainer from '../../../common/CardContainer';

export default function CardProjects() {
  const latestProjects = latestProjectPosts();
  return (
    <CardContainer>
      {latestProjects.slice(0, 3).map((project) => (
        <CardProject
          data={project.frontMatter as MetadataProject}
          slug={project.slug}
          key={project.id}
        />
      ))}
    </CardContainer>
  );
}
