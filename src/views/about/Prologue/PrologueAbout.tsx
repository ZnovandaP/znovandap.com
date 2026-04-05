import * as React from 'react';
import { LuDownload, LuUser2 } from 'react-icons/lu';
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
          paragraph="A short story of me, short journey why i choose software engineering as my career path"
        />

        <div className="flex mt-4 sm:mt-0 sm:absolute sm:-bottom-[3.5rem] sm:right-1/2 sm:translate-x-1/2">
          <ButtonLink
            text="Download Full Resume"
            href="https://drive.google.com/drive/folders/1ri8xKTMyMJo4YDz7V7YvAQ9Ow9IDX3Qu?usp=drive_link"
            target="_blank"
            icon={<LuDownload className='animate-bounce' />}
            className='text-sm'
          />
        </div>
      </div>

      <Line size="sm" className="my-8 sm:my-10" />
    </section>
  );
}
