import * as React from 'react';
import { LuPuzzle } from 'react-icons/lu';
import PrologueSection from '@/views/common/PrologueSection';
import Line from '@/components/Decoration/Line';

export default function PrologueEntertaiment() {
  return (
    <section className="p-8 pb-0 sm:py-0">
      <PrologueSection
        title="Entertaiment"
        icon={<LuPuzzle />}
        paragraph="Entertaiment page is contains a collection of memes or jokes in Bahasa, this page just for fun"
      />

      <Line size="sm" className="my-8" />
    </section>
  );
}
