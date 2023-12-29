import * as React from 'react';
import { Metadata } from 'next';
import METADATA from '@/constant/metadata';
import EntertaimentView from '@/views/entertaiment';

export const metadata: Metadata = {
  title: `Entertaiment ${METADATA.exTitle}`,
  description: 'Entertaiment page on znovandap.com, on this page contains a collection if memes or jokes in Bahasa, this page just for fun',
  keywords: 'jokes/memes znovandap, znovandap entertaiment',
  alternates: {
    canonical: `${process.env.DOMAIN}/entertaiment`,
  },
};

export default function EntertaimentPage(
  { searchParams }: { searchParams: { [key: string]: string | string[] | undefined } },
) {
  return (
    <EntertaimentView searchParams={searchParams.page as string} />
  );
}
