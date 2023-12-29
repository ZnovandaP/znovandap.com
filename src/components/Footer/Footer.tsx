/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import useOpenNavStore from '@/libs/zustand/nav-menu-store';
import * as React from 'react';
import Image from 'next/image';
import Container from '../Container';
import Line from '../Decoration/Line';
import HeadFooter from './HeadFooter';
import BodyFooter from './BodyFooter';
import CopyrightFooter from './CopyrightFooter';

export default function Footer() {
  const closeNavMenu = useOpenNavStore((state) => state.setClose);

  const handleClickFooter = () => {
    closeNavMenu();
  };

  return (
    <footer
      onClick={handleClickFooter}
      className="bg-gradient-to-t from-blue-600 via-blue-500/50 to-blue-300/30 dark:from-slate-950/80 dark:via-blue-900/40 dark:to-blue-400/10 pb-36 pt-6 px-6 mt-8 sm:pb-8"
    >
      <Container className="relative overflow-hidden sm:px-8">
        <section className="flex flex-col gap-8">
          <HeadFooter />
          <BodyFooter />
        </section>

        <Line size="sm" className="my-6" />

        <CopyrightFooter />

        <Footer.Decoration />
      </Container>
    </footer>
  );
}

function FooterImageDecoration() {
  return (
    <div className="absolute z-[-1] -bottom-10 right-0">
      <Image
        src="/decoration/square.webp"
        alt=""
        width={600}
        height={600}
        loading="lazy"
      />
    </div>
  );
}

Footer.Decoration = FooterImageDecoration;
