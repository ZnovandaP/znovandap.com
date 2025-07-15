/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import * as React from 'react';
import useOpenNavStore from '@/libs/zustand/nav-menu-store';

type MainProps = {
  children: React.ReactNode
};
export default function Main({ children }: MainProps) {
  const closeNavMenu = useOpenNavStore((state) => state.setClose);

  const handleClickMain = () => {
    closeNavMenu();
  };

  return (
    <main className="pt-16 lg:pt-0" onClick={handleClickMain}>
      {children}
    </main>
  );
}
