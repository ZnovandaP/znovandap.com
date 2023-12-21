import * as React from 'react';
import Container from '@/components/Container';
import { MdxFileProps } from '@/types/mdx';
import PrologueProjects from './layout/Prologue';
import ProjectContents from './layout/ProjectContents';

type ProjectsViewProps = {
  dataSort: {
    oldest: MdxFileProps[] | []
    latest: MdxFileProps[] | []
  }
};

export default function ProjectsView({ dataSort }: ProjectsViewProps) {
  return (
    <Container className="sm:mt-[8rem]" data-aos="fade-up" data-aos-duration="700">
      <PrologueProjects />
      <ProjectContents dataSort={dataSort} />
    </Container>
  );
}
