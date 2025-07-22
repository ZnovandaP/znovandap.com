import Link from 'next/link';
import * as React from 'react';

export default function BadgeLocation() {
  return (
    <div className="relative w-[17rem] bg-neutral-100 px-6 py-3 rounded-full dark:bg-neutral-800">
      <h2 className="flex justify-between gap-4 mb-4">
        <span className="flex flex-col">
          <span className="font-semibold">
            Live in Cimahi City
          </span>

          <span className="text-sm">
            West Java, Indonesia
          </span>
        </span>

        <span className="text-xl rounded-full ring-1 ring-neutral-300 dark:ring-neutral-600 p-2">
          🇮🇩
        </span>
      </h2>

      <Link
        href="/contact#contactme"
        className="absolute center gap-3 -bottom-[14px] left-1/2 -translate-x-1/2 py-1 px-4 rounded-full bg-transparent ring-2 ring-green-600/60 font-semibold hover:scale-105 active:scale-95 transition-all"
      >
        Hire me
        <span className="block ping relative w-2 h-2 bg-green-500 rounded-full" />
      </Link>
    </div>
  );
}
