import * as React from 'react';
import Container from '@/components/Container';
import Prologue from './layout/Prologue';

export default function HomeView() {
  return (
    <Container className="sm:mt-[8rem]">
      <Prologue />
    </Container>
  );
}
