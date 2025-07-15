'use client';

import * as React from 'react';
import { MdExpandMore } from 'react-icons/md';
import cn from '@/libs/utils/cn';
import { IoInvertModeOutline } from 'react-icons/io5';

type ButtonDarkModeMenuProps = {
  isOpen: boolean;
  handleClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string
  isHover?: boolean
};

export default function ButtonDarkModeMenu({
  handleClick, isOpen, className, isHover = true,
}: ButtonDarkModeMenuProps) {
  return (
    <button
      type="button"
      className={cn(
        'flex items-center gap-3  px-4 py-2 min-w-full ring-1 dark:ring-neutral-700 ring-neutral-300 active:scale-90 rounded-full transition-all',
        'dark:bg-neutral-900',
        className,
      )}
      onClick={handleClick}
    >
      <span className="text-xl">
        <IoInvertModeOutline className="w-6 h-6" />
      </span>

      {isHover && 'Theme'}

      {isHover && (
      <span className={cn(
        'text-xl transition-all duration-300 ml-auto',

        isOpen ? 'rotate-180' : 'rotate-0',
      )}
      >
        <MdExpandMore />
      </span>
      )}
    </button>
  );
}
