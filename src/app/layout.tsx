import * as React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NextThemeProvider from '@/components/Provider/NextThemeProvider';
import NavbarDesktop from '@/components/Navbar/Desktop';
import NavbarMobile from '@/components/Navbar/Mobile';
import Footer from '@/components/Footer';
import METADATA from '@/constant/metadata';
import TopLoader from '@/components/TopLoader';
import AosInit from '@/components/Aos';
import cn from '@/libs/utils/cn';
import './globals.css';
import Main from '@/components/Main';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000' : process.env.DOMAIN || ''),
  title: `Home ${METADATA.exTitle}`,
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: {
    name: METADATA.creator,
    url: METADATA.openGraph.url,
  },
  openGraph: {
    images: METADATA.profile,
    url: METADATA.openGraph.url,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <AosInit />
      <body
        suppressHydrationWarning
        className={cn(
          inter.variable,
          'text-neutral-500 bg-white font-inter',
          'dark:bg-black dark:text-neutral-100',
        )}
      >
        <TopLoader />
        <NextThemeProvider>
          <header>
            <NavbarDesktop />
            <NavbarMobile />
          </header>

          <div className="w-full h-[52dvh] absolute top-0 left-1/2 -translate-x-1/2 -z-10 rounded-lg animate-pulse bg-repeat-x ">
            <div className="bg-[url(/decoration/hexagonal-pattern.png)] w-full h-full bg-repeat bg-contain bg-left dark:opacity-35 opacity-45" />
          </div>

          <Main>
            {children}
          </Main>

          <Footer />
        </NextThemeProvider>
      </body>
    </html>
  );
}
