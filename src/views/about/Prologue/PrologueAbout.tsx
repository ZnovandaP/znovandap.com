import * as React from 'react';
import { LuUser2 } from 'react-icons/lu';
import { HiOutlineNewspaper } from 'react-icons/hi2';
import { ButtonLink } from '@/components/Button/Button';
import PrologueSection from '@/views/common/PrologueSection';
import Line from '@/components/Decoration/Line';

export default function PrologueAbout() {
  return (
    <section className="p-8 pb-0 sm:py-0">
      <div className="relative">
        <PrologueSection
          title="About Me"
          icon={<LuUser2 />}
          paragraph="I will share short story about me, about my journey why i learn programming specially front-end web development"
        />

        <div className="flex mt-4 sm:mt-0 sm:absolute sm:-bottom-[3.5rem] sm:right-1/2 sm:translate-x-1/2">
          <ButtonLink
            text="My Resume"
            href="/Zidane_Novanda_Putra_CV.pdf"
            target="_blank"
            icon={<HiOutlineNewspaper />}
          />
        </div>
      </div>

      <Line size="sm" className="my-8 sm:my-10" />
    </section>
  );
}
