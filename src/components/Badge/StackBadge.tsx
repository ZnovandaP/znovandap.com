import * as React from 'react';

type StackBadgeProps = {
  icon: string | React.JSX.Element
  text: string
};

export default function StackBadge({ icon, text }: StackBadgeProps) {
  return (
    <div className="mx-2">
      <div className="center gap-2 ring-1 ring-stone-500 rounded-full font-medium px-3 py-2">
        <span className="text-xl">
          {icon}
        </span>
        {text}
      </div>
    </div>
  );
}
