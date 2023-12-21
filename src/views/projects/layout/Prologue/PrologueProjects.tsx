import * as React from 'react';
import { LuLayout } from 'react-icons/lu';
import PrologueSection from '@/views/common/PrologueSection';
import Line from '@/components/Decoration/Line';

export default function PrologueProjects() {
  return (
    <section className="p-8 pb-0 sm:py-0">
      <PrologueSection
        title="Projects"
        icon={<LuLayout />}
        paragraph="Showcasing my journey to become front-end web developer through projects. On this page i want to display project showcase while i was learning code (front-end web development) by myself."
      />

      <Line size="sm" className="my-8" />
    </section>
  );
}
