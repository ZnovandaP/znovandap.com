import * as React from 'react';
import Link from 'next/link';
import dataNavbar from '@/constant/data-navbar';

export default function FooterNavigation() {
  return (
    <nav className="flex flex-col gap-2">
      <FooterNavigation.NavigationTitle title="Navigation" />
      <FooterNavigation.NavigationList />
    </nav>
  );
}

function NavigationTitle({ title }: { title: string }) {
  return (
    <h2 className="text-balance text-center text-lg text-sky-900 dark:text-sky-500 font-semibold">
      {title}
    </h2>
  );
}

function NavLink({ data }: { data: typeof dataNavbar[0] }) {
  return (
    <Link href={data.pathname} className="block text-stone-800 dark:text-stone-50 font-medium hover:scale-110 active:scale-100 transition-all duration-300">
      {data.title}
    </Link>
  );
}

function NavigationList() {
  return (
    <ul className="center gap-x-6 gap-y-3 flex-wrap">
      {dataNavbar.map((data) => (
        <li key={data.pathname}>
          <NavLink data={data} />
        </li>
      ))}
    </ul>
  );
}

FooterNavigation.NavigationList = NavigationList;
FooterNavigation.NavigationTitle = NavigationTitle;
