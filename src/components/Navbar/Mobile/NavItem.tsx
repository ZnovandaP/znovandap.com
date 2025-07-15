'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import dataNavbar from '@/constant/data-navbar';
import cn from '@/libs/utils/cn';

type NavItemProps = {
  data: typeof dataNavbar[0]
};

export default function NavItem({ data }: NavItemProps) {
  const pathname = usePathname();
  const arrOfRoute = pathname.split('/');
  const baseRoute = `/${arrOfRoute[1]}`;
  const isSelected = baseRoute === data.pathname;
  return (
    <div>
      <Link
        href={data.pathname}
        className={
              cn(
                'transition-all duration-300 px-4 py-2 flex gap-3 dark:hover:bg-neutral-800 hover:bg-neutral-100 rounded-lg',

                isSelected && 'dark:bg-neutral-700 bg-neutral-200 ring-1 dark:ring-neutral-600 ring-neutral-300',
              )
            }
      >
        <span className="text-xl">
          <data.Icon />
        </span>
        {data.title}
      </Link>
    </div>
  );
}
