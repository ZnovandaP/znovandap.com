'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import dataNavbar from '@/constant/data-navbar';
import cn from '@/libs/utils/cn';

type NavItemProps = {
  data: typeof dataNavbar[0]
  isHover: boolean
};

export default function NavItem({ data, isHover }: NavItemProps) {
  const pathname = usePathname();
  const arrOfRoute = pathname.split('/');
  const baseRoute = `/${arrOfRoute[1]}`;
  const isSelected = baseRoute === data.pathname;
  return (
    <div className={
      cn(
        'dark:hover:bg-neutral-800 hover:bg-neutral-100 transition-all duration-300 hover:rounded-lg group active:scale-90',
        isHover ? 'w-full pl-4' : 'rounded-full',
        isSelected && 'dark:bg-neutral-700 rounded-full bg-neutral-200 ring-1 dark:ring-neutral-600 ring-neutral-300',
        (isHover && isSelected) && 'rounded-lg',
      )
    }
    >
      <Link
        href={data.pathname}
        className="flex gap-3 p-2"
      >
        <span>
          <data.Icon className="w-6 h-6" />
        </span>
        <span className={cn(
          'font-medium transition-all duration-300',

          !isSelected && 'group-hover:scale-[1.02] group-hover:translate-x-1',

          !isHover ? 'opacity-0' : 'opacity-100',
        )}
        >
          {isHover && data.title}
        </span>
      </Link>
    </div>
  );
}
