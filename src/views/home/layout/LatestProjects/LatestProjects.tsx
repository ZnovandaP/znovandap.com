import * as React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { LuLayout } from 'react-icons/lu';
import Line from '@/components/Decoration/Line';
import CardProjects from './CardProjects';
import PrologueSection from '../../../common/PrologueSection';
import EpilogueSection from '../../../common/EpilogueSection';

export default function LatestProjects() {
  return (
    <>
      <Line size="sm" className="m-8" borderStyle="border-solid" />

      <section
        className="px-8 sm:pt-0 pb-8 rounded-2xl bg-gradient-to-t from-sky-600/30 from-5% via-sky-600/5 via-30% "
        data-aos="fade-up"
      >
        <PrologueSection
          title="Latest Projects"
          icon={<LuLayout />}
          paragraph="This is my latest project as a front-end web developer, you could say this is a record of my journey to becoming a front-end web developer"
        />

        <CardProjects />

        <EpilogueSection
          paragraph="You can see more of my projects by clicking the button below, do you interesting?"
          href="/projects"
          icon={<BsArrowRight />}
          textButton="More Projects"
        />
      </section>
    </>
  );
}
