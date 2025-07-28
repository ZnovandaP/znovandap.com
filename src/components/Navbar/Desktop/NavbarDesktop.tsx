'use client';

import * as React from 'react';
import cn from '@/libs/utils/cn';
import ButtonDarkModeMenu from '@/components/Button/ButtonDarkModeMenu';
import dataNavbar from '@/constant/data-navbar';
import { useWindowSize } from 'usehooks-ts';
import Line from '@/components/Decoration/Line';
import { VscVerifiedFilled } from 'react-icons/vsc';
import { LuHeart } from 'react-icons/lu';
import { ProfilePicture } from '@/components/Footer/ProfileCard';
import NavItem from './NavItem';
import DarkModeMenu from '../DarkModeMenu';
import NavbarContainer from './NavbarContainer';

export default function NavbarDesktop() {
  const [openDarkModeMenu, setOpenDarkModeMenu] = React.useState(true);
  const ref = React.useRef(null);
  const [hovering, setHovering] = React.useState(false);
  const windowSize = useWindowSize();
  const isLargeScreen = windowSize?.width! >= 1024;
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  if (!isLargeScreen) return null;

  return (
    <NavbarContainer
      handleMouseEnter={() => setHovering(true)}
      handleMouseLeave={() => setHovering(false)}
      ref={ref}
      isHover={hovering}
    >
      <div className="flex-col gap-1 mt-8 center">
        <ProfilePicture className={cn(
          'w-14 h-14 p-0',

          hovering && 'w-[5.5rem] h-[5.5rem] p-[2px] bg-green-600',
        )}
        />
        <p className="flex items-center gap-1 mt-4 text-nowrap">
          { hovering && 'Zidane Novanda Putra'}
          <VscVerifiedFilled className="w-5 h-5 text-sky-400" />
        </p>

        <p className="text-sm text-nowrap dark:text-neutral-400">
          { hovering && '@znonvadadev'}
        </p>
      </div>

      {/* Menu Apps */}
      <div className="flex flex-col w-full gap-3 font-medium">
        <div className="overflow-y-auto overflow-x-hidden space-y-3 min-h-[300px]">
          {dataNavbar.map((item) => (
            <NavItem data={item} key={item.title} isHover={hovering} />
          ))}
        </div>

        <Line size="sm" className="my-6" />

        <ButtonDarkModeMenu
          isOpen={openDarkModeMenu}
          handleClick={() => setOpenDarkModeMenu(!openDarkModeMenu)}
          isHover={hovering}
          className={cn(
            !hovering && 'justify-center bg-neutral-100 dark:bg-neutral-800 p-2 ring-1 dark:ring-neutral-700 ring-neutral-300 rounded-md',
          )}
        />
        <DarkModeMenu isOpen={openDarkModeMenu && hovering} />
      </div>

      <div className="mb-8">
        <p className={cn(
          'text-xs justify-center transition-all duration-300 ease-in-out',
          hovering && 'items-center flex space-x-2',
        )}
        >
          <span className={cn(
            'transition-all duration-300 ease-in-out',
            hovering ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
          )}
          >
            {hovering && 'Created with'}
          </span>
          <LuHeart className="w-6 h-6 bg-pink-500 px-[2px] rounded-md text-white animate-pulse" />
          <span className={cn(
            'transition-all duration-300 ease-in-out',
            hovering ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
          )}
          >
            {hovering && 'by znovandadev'}
          </span>
        </p>
      </div>
    </NavbarContainer>
  );
}
