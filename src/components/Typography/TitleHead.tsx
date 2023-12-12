import * as React from 'react';
import cn from '@/libs/utils/cn';

type TitleHeadProps = {
  icon?: React.ReactElement
  text: string
};
export default function TitleHead({ icon, text }: TitleHeadProps) {
  return (
    <h2
      className={cn(
        'flex items-center gap-2 text-balance text-3xl text-stone-500/70 dark:text-stone-400/80 font-bold',

        'sm:text-4xl lg:text-5xl',
      )}
    >
      <span className="text-2xl lg:text-3xl">
        {icon}
      </span>
      {text}
    </h2>
  );
}
