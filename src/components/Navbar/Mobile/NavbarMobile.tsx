'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import ButtonDarkModeMenu from '@/components/Button/ButtonDarkModeMenu';
import dataNavbar from '@/constant/data-navbar';
import cn from '@/libs/utils/cn';
import useOpenNavStore from '@/libs/zustand/nav-menu-store';
import { ProfilePicture } from '@/components/Footer/ProfileCard';
import { VscVerifiedFilled } from 'react-icons/vsc';
import ButtonHumbuger from '@/components/Button/ButtonHumbuger';
import Line from '@/components/Decoration/Line';
import NavItem from './NavItem';
import DarkModeMenu from '../DarkModeMenu';
import NavbarContainer from './NavbarContainer';

export default function NavbarMobile() {
  const [openDarkModeMenu, setOpenDarkModeMenu] = React.useState(true);
  const { isOpen, setToggle, setClose } = useOpenNavStore();
  const pathname = usePathname();

  React.useEffect(() => {
    setClose();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  return (
    <NavbarContainer isOpen={isOpen}>
      <div className={cn(
        'flex items-center justify-between min-h-[70px] w-full',
      )}
      >
        <div className="flex items-center gap-2">
          <ProfilePicture className="w-11 h-11 p-0" />
          <div className="flex flex-col">
            <p className="flex items-center gap-1 text-nowrap">
              Zidane Novanda Putra
              <VscVerifiedFilled className="w-5 h-5 text-sky-400" />
            </p>

            <p className={cn(
              'text-sm text-nowrap transition-all duration-300 dark:text-neutral-400',
              isOpen ? 'translate-y-0' : 'translate-y-6',
            )}
            >
              { isOpen && '@znonvadadev'}
            </p>
          </div>
        </div>

        <ButtonHumbuger openMenu={isOpen} handleToogle={() => setToggle()} />
      </div>

      {/* Menu Apps */}
      <div className="flex flex-col w-full gap-3 font-medium">
        <ButtonDarkModeMenu
          isOpen={openDarkModeMenu}
          handleClick={() => setOpenDarkModeMenu(!openDarkModeMenu)}
          isHover={isOpen}
          className={cn(
            !isOpen && 'justify-center bg-neutral-100 dark:bg-neutral-800 p-2 ring-1 dark:ring-neutral-700 ring-neutral-300 rounded-md',
          )}
        />
        <DarkModeMenu isOpen={openDarkModeMenu && isOpen} />

        <Line size="sm" className="my-3" />
        <div className="overflow-y-auto overflow-x-hidden space-y-3 min-h-[300px]">
          {dataNavbar.map((item) => (
            <NavItem data={item} key={item.title} />
          ))}
        </div>
      </div>

    </NavbarContainer>
  );
}
