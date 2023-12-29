import * as React from 'react';
import SlideBottom from '@/components/Animated/SlideBottom';
import Container from '@/components/Container';
import PrologueEntertaiment from '@/views/entertaiment/Prologue';

type LayoutEntertaimentPageProps = {
  children: React.ReactNode
};

export default function LayoutEntertaimentPage({ children }: LayoutEntertaimentPageProps) {
  return (
    <SlideBottom>
      <Container className="sm:mt-[8rem]">
        <PrologueEntertaiment />
        {children}
      </Container>
    </SlideBottom>
  );
}
