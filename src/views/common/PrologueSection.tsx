import * as React from 'react';
import TitleHead from '@/components/Typography/TitleHead';

type PrologueSectionProps = {
  title: string
  icon: React.ReactElement
  paragraph: string
};
export default function PrologueSection({ title, icon, paragraph }: PrologueSectionProps) {
  return (
    <>
      <TitleHead text={title} icon={icon} />
      <p className="mt-4 font-medium">
        {paragraph}
      </p>
    </>
  );
}
