import cn from '@/libs/utils/cn';
import * as React from 'react';
import Tooltip from '../Tooltip';

type ButtonChangeLayoutProps = {
  icon: React.ReactElement
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void
  isActive:boolean
  title: string
};
export default function ButtonChangeLayout({
  icon, onClick, isActive, title,
}: ButtonChangeLayoutProps) {
  return (
    <Tooltip title={title}>
      <button
        onClick={onClick}
        type="button"
        className={cn(
          'center',
          'text-xl ring-2 ring-stone-500/80 p-2 rounded-lg bg-transparent',
          'hover:scale-110 active:scale-100 transition-all duration-300',

          isActive && 'shadow-md shadow-stone-600/80 ring-sky-500 text-sky-500',

          !isActive && 'opacity-80',
        )}
      >
        {icon}
      </button>
    </Tooltip>
  );
}
