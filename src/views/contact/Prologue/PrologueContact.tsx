import * as React from 'react';
import { LuMailbox } from 'react-icons/lu';
import PrologueSection from '@/views/common/PrologueSection';
import Line from '@/components/Decoration/Line';

export default function PrologueContact() {
  return (
    <section className="p-8 pb-0 sm:py-0">
      <PrologueSection
        title="Contact"
        icon={<LuMailbox />}
        paragraph="If you have a project idea or job as a front-end web developer and you are willing to invite me to collaborate with me. You can contact me by filling in the contact form below"
      />

      <Line size="sm" className="my-8" />
    </section>
  );
}
