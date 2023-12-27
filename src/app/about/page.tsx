import * as React from 'react';
import { Metadata } from 'next';
import METADATA from '@/constant/metadata';
import AboutView from '@/views/about';

export const metadata: Metadata = {
  title: `About ${METADATA.exTitle}`,
  description: 'About page on znovandap.com, contains my biodata and my journy why i\'am interest to become a front-end web developer',
  keywords: 'about znovandap, znovandap about, zidane novanda putra about, about zidane novanda putra',
  alternates: {
    canonical: `${process.env.DOMAIN}/about`,
  },
};

export default function AboutPage() {
  return (
    <AboutView />
  );
}
