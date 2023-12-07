'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import ButtonMore from '@/components/Button/ButtonMore';
import ButtonDarkModeMenu from '@/components/Button/ButtonDarkModeMenu';
import Container from '@/components/Container';
import dataNavbar from '@/constant/data-navbar';
import cn from '@/libs/utils/cn';
import useOpenNavStore from '@/libs/zustand/nav-menu-store';
import NavItem from '../NavItem';
import AdditionalMenu from '../AdditionalMenu';
import DarkModeMenu from '../DarkModeMenu';
import Navbar from '../Navbar';

const lastIndexForShowingItem = 4;

export default function NavbarMobile() {
  const isOpen = useOpenNavStore((state) => state.isOpen);
  const toggleOpenMenuNav = useOpenNavStore((state) => state.setToggle);

  const [openDarkModeMenu, setOpenDarkModeMenu] = React.useState(false);

  const pathname = usePathname();

  return (
    <Container className="fixed bottom-6 left-1/2 -translate-x-1/2 flex justify-center sm:hidden">
      <Navbar>
        <ul className="flex gap-0 items-center justify-between w-full font-medium">
          {dataNavbar.slice(0, lastIndexForShowingItem).map((item) => (
            <NavItem data={item} key={item.title} column />
          ))}

          <li
            className="bg-stone-100 dark:bg-stone-900 p-1 rounded-full absolute -top-5 right-1/2 translate-x-1/2"
          >
            <ButtonMore
              handleClick={() => toggleOpenMenuNav()}
              className={cn(
                pathname.startsWith('/dashboard') || pathname.startsWith('/entertaiment')
                || pathname.startsWith('/contact')
                  ? 'bg-stone-200/10 backdrop-blur-md  shadow-md shadow-stone-500/60 ring-2 ring-green-500'
                  : '',
              )}
            />
          </li>

          <AdditionalMenu isOpenMenu={isOpen} isOpenDarkMenu={openDarkModeMenu} isMobile>
            <ul className="flex flex-col items-center gap-1 relative">
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
