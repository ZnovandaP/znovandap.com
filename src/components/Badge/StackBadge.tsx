import * as React from 'react';
import Icons from '@/constant/icons';

type StackBadgeProps = {
  icon: string
  text: string
};

export default function StackBadge({ icon, text }: StackBadgeProps) {
  return (
    <div className="mx-2">
      <div className="center gap-2 ring-1 ring-stone-500 rounded-full font-medium px-3 py-2">
        <span className="text-xl">
          {Icons[icon]}
        </span>
        {text}
      </div>
    </div>
  );
}
