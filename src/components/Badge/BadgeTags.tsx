import * as React from 'react';
import cn from '@/libs/utils/cn';

type BadgeTagsProps = {
  icon?: string | React.JSX.Element | React.ReactNode
  label: string
  size?: 'sm' | 'md'
  className?: string
  type?: 'default' | 'danger-outline' | 'warning' | 'info-outline' | 'success'
};

export default function BadgeTags({ icon, label, size = 'sm', className, type = 'default' }: BadgeTagsProps) {
  return (
    <div className={cn(
      'center gap-2 ring-1 rounded-full font-medium',

      type === 'default' && 'ring-stone-500',

      type === 'danger-outline' && 'ring-rose-500 text-rose-500',

      type === 'info-outline' && 'ring-sky-500 text-sky-500',

      size === 'sm' && 'text-xs px-2 py-1',

      size === 'md' && 'text-sm px-3 py-1',

      className,
    )}
    >
      {icon && (
      <span className={cn(
        size === 'sm' && 'text-sm',

        size === 'md' && 'text-xl',
      )}
      >
        {icon}
      </span>
      )}
      {label}
    </div>
  );
}
