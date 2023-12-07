import * as React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NextThemeProvider from '@/components/Provider/NextThemeProvider';
import NavbarDesktop from '@/components/Navbar/Desktop';
import NavbarMobile from '@/components/Navbar/Mobile';
import cn from '@/libs/utils/cn';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'znovandap | Home',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        inter.className,
        'text-stone-600 bg-stone-50',

        'dark:bg-stone-950 dark:text-stone-200',

        'text-sm md:text-base',
      )}
      >
        <NextThemeProvider>
          <header className="inline">
            <NavbarDesktop />
            <NavbarMobile />
          </header>
          <main className="h-[2000px]">
            {children}
          </main>
        </NextThemeProvider>
      </body>
    </html>
  );
}
