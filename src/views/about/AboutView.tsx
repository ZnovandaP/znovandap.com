import * as React from 'react';
import Container from '@/components/Container';
import PrologueAbout from './Prologue';
import TechStacksSection from './TechStacks';
import StoryAboutMeSection from './StoryAboutMe';

export default function AboutView() {
  return (
    <Container className="sm:mt-[8rem]" data-aos="fade-up" data-aos-duration="700">
      <PrologueAbout />
      <StoryAboutMeSection />
      <TechStacksSection />
    </Container>
  );
}
