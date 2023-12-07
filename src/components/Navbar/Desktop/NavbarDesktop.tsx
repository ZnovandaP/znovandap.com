'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import cn from '@/libs/utils/cn';
import useOpenNavStore from '@/libs/zustand/nav-menu-store';
import ButtonMore from '@/components/Button/ButtonMore';
import ButtonDarkModeMenu from '@/components/Button/ButtonDarkModeMenu';
import Container from '@/components/Container';
import dataNavbar from '@/constant/data-navbar';
import NavItem from '../NavItem';
import AdditionalMenu from '../AdditionalMenu';
import DarkModeMenu from '../DarkModeMenu';
import Navbar from '../Navbar';

const lastIndexForShowingItem = 5;

export default function NavbarDesktop() {
  const isOpen = useOpenNavStore((state) => state.isOpen);
  const toggleOpenMenuNav = useOpenNavStore((state) => state.setToggle);

  const [openDarkModeMenu, setOpenDarkModeMenu] = React.useState(false);

  const pathname = usePathname();

  return (
    <Container className="sticky top-10 hidden sm:flex justify-center">
      <Navbar>
        <ul className="flex gap-0 items-center justify-between w-full font-medium">
          {dataNavbar.slice(0, lastIndexForShowingItem).map((item) => (
            <NavItem data={item} key={item.title} row />
          ))}

          <li>
            <ButtonMore
              handleClick={() => toggleOpenMenuNav()}
              className={cn(
                // active
                pathname.startsWith('/dashboard') || pathname.startsWith('/entertaiment')
                  ? 'bg-stone-200/10 backdrop-blur-md shadow-md shadow-stone-500/60 ring-2 ring-green-500'
                  : '',
              )}
            />
          </li>

          <AdditionalMenu isOpenMenu={isOpen}>
            <ul className="flex flex-col items-center gap-1">
              {dataNavbar.slice(lastIndexForShowingItem, dataNavbar.length).map((item) => (
                <NavItem data={item} key={item.title} row />
              ))}
              <li className="w-full">
                <ButtonDarkModeMenu
                  isOpen={openDarkModeMenu}
                  handleClick={() => setOpenDarkModeMenu(!openDarkModeMenu)}
                />
                <DarkModeMenu isOpen={openDarkModeMenu} />
              </li>
            </ul>
          </AdditionalMenu>
        </ul>
      </Navbar>
    </Container>
  );
}
