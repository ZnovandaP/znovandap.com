import * as React from 'react';
import { LuNewspaper } from 'react-icons/lu';
import PrologueSection from '@/views/common/PrologueSection';
import Line from '@/components/Decoration/Line';

export default function PrologueBlog() {
  return (
    <section className="p-8 pb-0 sm:py-0">
      <PrologueSection
        title="Blog"
        icon={<LuNewspaper />}
        paragraph="I share my process, experiences, tips and resources related to web development specially front-end web development, in my blog to help others on their web development journey."
      />

      <Line size="sm" className="my-8" />
    </section>
  );
}
