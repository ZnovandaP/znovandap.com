import * as React from 'react';
import { LuLayout } from 'react-icons/lu';
import TitleHead from '@/components/Typography/TitleHead';

export default function Prologue() {
  return (
    <>
      <TitleHead text="Latest Projects" icon={<LuLayout />} />
      <p className="mt-4 font-medium">
        This is my latest project as a front-end web developer, you could say this is a record of my
        journey to becoming a front-end web developer
      </p>
    </>
  );
}
