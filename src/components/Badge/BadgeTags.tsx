import Icons from '@/constant/icons';
import * as React from 'react';

type BadgeTagsProps = {
  stack: string
};

export default function BadgeTags({ stack }: BadgeTagsProps) {
  return (
    <div className="center gap-2 px-2 py-1 ring-1 ring-purple-500 rounded-full text-xs font-medium">
      {Icons[stack] && (
      <span className="text-sm">
        {Icons[stack]}
      </span>
      )}
      {stack}
    </div>
  );
}
