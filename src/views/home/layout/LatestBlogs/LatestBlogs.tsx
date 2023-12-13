import * as React from 'react';
import { LuNewspaper } from 'react-icons/lu';
import { BsArrowRight } from 'react-icons/bs';
import Line from '@/components/Decoration/Line';
import CardProjects from '../LastProjects/CardProjects';
import PrologueSection from '../common/PrologueSection';
import EpilogueSection from '../common/EpilogueSection';

export default function LatestBlogs() {
  return (
    <>
      <Line size="sm" className="m-8 mt-10" borderStyle="border-solid" />

      <section className="px-8 sm:pt-0 pb-8 rounded-2xl bg-gradient-to-t from-violet-600/40 from-5% via-violet-600/5 via-30% ">
        <PrologueSection
          title="Latest Blogs"
          icon={<LuNewspaper />}
          paragraph="This is my latest post blogs, i'am quite active in sharing the knowledge
    i understand about front-end web development"
        />

        <CardProjects />

        <EpilogueSection
          paragraph="You can see more and reed of my blog by clicking the button below, do you interesting?"
          href="/blog"
          icon={<BsArrowRight />}
          textButton="More Blogs"
        />
      </section>
    </>
  );
}
