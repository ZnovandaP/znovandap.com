'use client';

import * as React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import Link from 'next/link';

type ButtonBackProps = {
  className: string
  to: string
  text?: string
};

export default function ButtonBack({ className = '', to, text = '' }: ButtonBackProps) {
  return (
    <Link
      href={to}
      className={`center gap-2 rounded-lg px-3 py-2 ring-1 ring-stone-500/60 hover:scale-110 active:scale-100 transition duration-300 font-medium ${className}`}
    >
      <IoMdArrowBack className="text-xl" />
      {text || 'back'}
    </Link>
  );
}
