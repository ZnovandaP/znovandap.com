import * as React from 'react';
import Link from 'next/link';
import Line from '@/components/Decoration/Line';
import dataLinkContact from '@/constant/data-link-contact';

export default function FindMeOnSection() {
  return (
    <section className="px-8 pb-0 sm:py-0">
      <h3 className="text-xl font-semibold opacity-70">
        Let&apos;s get in touch, find me on
      </h3>

      <div className="mt-6 flex items-center flex-wrap gap-6">
        {dataLinkContact.map((data) => (
          <Link
            key={data.title}
            href={data.href}
            target="_blank"
            style={{ background: data.color }}
            className="center gap-2 font-medium py-2 px-4 text-stone-100 rounded-lg hover:scale-110 dark:ring-2 dark:ring-stone-500 active:scale-100 transition-all duration-300"
          >
            <span className="text-xl">
              <data.Icon />
            </span>
            {data.title}
          </Link>
        ))}
      </div>

      <Line size="sm" className="my-8" borderStyle="border-dashed" />
    </section>
  );
}
