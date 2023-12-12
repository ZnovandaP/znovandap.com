import cn from '@/libs/utils/cn';
import * as React from 'react';

type LineProps = {
  size: 'sm' | 'md' | 'lg'
  borderStyle?: 'border-solid' | 'border-dashed' | 'border-dotted' | 'border-double'
  className?: string
};
export default function Line({ size, className, borderStyle }: LineProps) {
  return (
    <hr
      className={cn(
        'border-stone-400/80 dark:border-stone-500 rounded-xl ',

        borderStyle,

        size === 'sm' && 'border',

        size === 'md' && 'border-2',

        size === 'lg' && 'border-[3px]',

        className,
      )}
    />
  );
}
