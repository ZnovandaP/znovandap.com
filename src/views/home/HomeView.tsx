import * as React from 'react';
import Container from '@/components/Container';
import Line from '@/components/Decoration/Line';
import Prologue from './layout/Prologue';
import LastProjects from './layout/LastProjects';

export default function HomeView() {
  return (
    <Container className="sm:mt-[8rem]">
      <Prologue />

      <Line size="sm" className="m-8" borderStyle="border-solid" />
      <LastProjects />

    </Container>
  );
}
