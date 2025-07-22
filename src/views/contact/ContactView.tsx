import * as React from 'react';
import Container from '@/components/Container';
import SlideBottom from '@/components/Animated/SlideBottom';
import PrologueContact from './Prologue';
import FindMeOnSection from './FindMeOn';
import FormContactSection from './FormContact';

export default function ContactView() {
  return (
    <SlideBottom>
      <Container className="sm:mt-[6rem]">
        <PrologueContact />
        <FindMeOnSection />
        <FormContactSection />
      </Container>
    </SlideBottom>
  );
}
