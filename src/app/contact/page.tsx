import * as React from 'react';
import { Metadata } from 'next';
import METADATA from '@/constant/metadata';
import ContactView from '@/views/contact';

export const metadata: Metadata = {
  title: `Contact ${METADATA.exTitle}`,
  description: 'Contact page on znovandap.com, you can send me a message on this page',
  keywords: 'contact znovandap, znovandap contact, zidane novanda putra contact',
  alternates: {
    canonical: `${process.env.DOMAIN}/contact`,
  },
};

export default function ContactPage() {
  return (
    <ContactView />
  );
}
