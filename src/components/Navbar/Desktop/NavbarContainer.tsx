import cn from '@/libs/utils/cn';
import * as React from 'react';

type NavbarContainerProps = {
  children: React.ReactNode
  isHover: boolean
};

export type Ref = HTMLElement;

const NavbarContainer = React.forwardRef<Ref, NavbarContainerProps>(({ children, isHover }, ref) => (
  <nav
    ref={ref}
    className={cn(
      'overflow-y-auto overflow-x-hidden transition-all duration-300 flex flex-col justify-between items-center px-4 h-[100dvh] bg-white fixed top-0 z-[9999] w-[75px] ring-1 ring-stone-500/30',

      'dark:ring-stone-300/30  dark:bg-black',

      isHover && 'w-[250px]',
    )}
  >
    {children}
  </nav>
));

export default NavbarContainer;
