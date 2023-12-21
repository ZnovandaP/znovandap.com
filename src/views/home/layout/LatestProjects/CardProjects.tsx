import * as React from 'react';
import { MetadataProject } from '@/types/mdx';
import { oldestPostProjects } from '@/libs/utils/sortingPostProjectByDate';
import CardProject from '@/components/Card/CardProject';
import CardContainer from '../../../common/CardContainer';

export default function CardProjects() {
  const latestProjects = oldestPostProjects();
  return (
    <CardContainer>
      {latestProjects.slice(0, 3).map((data) => {
        const frontMatter = data.frontMatter as MetadataProject;

        return (
          <CardProject data={frontMatter} slug={data.slug} key={data.id} />
        );
      })}
    </CardContainer>
  );
}
