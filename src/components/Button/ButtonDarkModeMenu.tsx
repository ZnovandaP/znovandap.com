'use client';

import * as React from 'react';
import { MdExpandMore } from 'react-icons/md';
import { LiaPaintBrushSolid } from 'react-icons/lia';
import cn from '@/libs/utils/cn';

type ButtonDarkModeMenuProps = {
  isOpen: boolean;
  handleClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function ButtonDarkModeMenu({ handleClick, isOpen }: ButtonDarkModeMenuProps) {
  return (
    <button
      type="button"
      className="flex items-center gap-1 justify-between px-4 py-2 min-w-full hover:ring-1 hover:ring-stone-500/50 active:scale-90 rounded-full transition-all"
      onClick={handleClick}
    >
      <span className="text-xl">
        <LiaPaintBrushSolid />
      </span>

      Set Theme

      <span className={cn(
        'text-xl transition-all duration-300',

        isOpen ? 'rotate-180' : 'rotate-0',
      )}
      >
        <MdExpandMore />
      </span>
    </button>
  );
}
