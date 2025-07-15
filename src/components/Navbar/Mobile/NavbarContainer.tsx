import cn from '@/libs/utils/cn';
import { useWindowSize } from '@uidotdev/usehooks';
import * as React from 'react';

type NavbarContainerProps = {
  children: React.ReactNode,
  isOpen: boolean
};

export type Ref = HTMLElement;

const NavbarContainer = React.forwardRef<Ref, NavbarContainerProps>(({ children, isOpen }, ref) => {
  const windowSize = useWindowSize();
  const isNotLargeScreen = windowSize?.width! <= 1024;
  return isNotLargeScreen && (
    (
      <nav
        ref={ref}
        className={cn(
          'transition-all duration-300 flex flex-col space-y-6 px-8 h-[70px] w-full bg-white fixed top-0 z-[9999] ring-1 ring-stone-500/30',

          'dark:ring-stone-300/30  dark:bg-black',

          isOpen && 'h-[100dvh]',
          !isOpen && 'overflow-hidden',

        )}
      >
        {children}
      </nav>
    )
  );
});

export default NavbarContainer;
