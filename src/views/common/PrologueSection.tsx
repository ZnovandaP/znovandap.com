import * as React from 'react';
import TitleHead from '@/components/Typography/TitleHead';
import cn from '@/libs/utils/cn';

type PrologueSectionProps = {
  title: string
  icon?: React.ReactElement
  paragraph: string
  type?: 'head-section' | 'head-page'
};
export default function PrologueSection({
  title, icon, paragraph, type = 'head-page',
}: PrologueSectionProps) {
  return (
    <>
      <TitleHead text={title} icon={icon} />
      <p className={cn(
        'mt-4',
        type === 'head-page' && 'text-lg opacity-75 font-semibold',

        type === 'head-section' && 'font-medium',
      )}
      >
        {paragraph}
      </p>
    </>
  );
}
