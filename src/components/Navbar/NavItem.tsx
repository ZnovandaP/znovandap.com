'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import dataNavbar from '@/constant/data-navbar';
import cn from '@/libs/utils/cn';

type NavItemProps = {
  data: typeof dataNavbar[0]
  column?: boolean
  row?: boolean
};

export default function NavItem({ data, column, row }: NavItemProps) {
  const pathname = usePathname();
  const arrOfRoute = pathname.split('/');
  const baseRoute = `/${arrOfRoute[1]}`;
  return (
    <li>
      <Link
        href={data.pathname}
        className={
              cn(
                'transition-all duration-300 hover:scale-110 active:scale-95',

                column && 'flex flex-col justify-center items-center py-2 px-4 rounded-lg',

                row && 'flex gap-2 items-center py-2 px-4 rounded-full',

                baseRoute === data.pathname
                && 'font-bold bg-stone-200/5 backdrop-blur-md shadow-md shadow-stone-500/60 dark:shadow-stone-800',
              )
            }
      >
        <span className="text-xl">
          <data.Icon />
        </span>
        {data.title}
      </Link>
    </li>
  );
}
