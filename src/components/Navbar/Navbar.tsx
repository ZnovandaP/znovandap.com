import cn from '@/libs/utils/cn';
import * as React from 'react';

type NavbarProps = {
  children: React.ReactNode
};

export default function Navbar({ children }: NavbarProps) {
  return (
    <nav
      className={cn(
        'flex items-center px-8 sm:px-5 md:px-8 h-[4.5rem] sm:h-16 rounded-full backdrop-blur-lg bg-stone-100/5 ring-2 ring-stone-500/30 shadow-lg shadow-stone-400/50',

        'dark:ring-stone-300/30 dark:shadow-stone-800',

        'md:w-[85%] lg:w-[75%]',
      )}
    >
      {children}
    </nav>
  );
}
