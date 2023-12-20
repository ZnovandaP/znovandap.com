import * as React from 'react';
import Icons from '@/constant/icons';
import cn from '@/libs/utils/cn';

type BadgeTagsProps = {
  stack: string
  size?: 'sm' | 'md'
  className?: string
};

export default function BadgeTags({ stack, size = 'sm', className }: BadgeTagsProps) {
  return (
    <div className={cn(
      'center gap-2 ring-1 ring-stone-500 rounded-full font-medium',

      size === 'sm' && 'text-xs px-2 py-1',

      size === 'md' && 'text-base px-3 py-2',

      className,
    )}
    >
      {Icons[stack] && (
      <span className={cn(
        size === 'sm' && 'text-sm',

        size === 'md' && 'text-xl',
      )}
      >
        {Icons[stack]}
      </span>
      )}
      {stack}
    </div>
  );
}
