import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type DataNotFoundSectionProps = {
  type?: 'projects' | 'blog'
};

export default function DataNotFoundSection({ type = 'projects' }: DataNotFoundSectionProps) {
  return (
    <section className="center flex-col h-[70dvh]">
      <div className="center w-full h-[16rem] sm:h-[17.5rem] md:h-[18.5rem] lg:h-[20rem]">
        <Image
          src="/ilustration/not-found.svg"
          alt="Ilustration data not found"
          height={600}
          width={600}
          priority
          className="w-full h-full opacity-70 dark:opacity-60"
        />
      </div>

      <div className="mt-6 px-8 text-center">
        <h2 className="text-red-600 font-semibold text-2xl animate-bounce">
          {type === 'projects' ? 'Project' : 'Post'}
          {' '}
          Not found!
        </h2>

        <p className="mt-2 font-medium">
          The
          {' '}
          {type === 'projects' ? 'project' : 'post'}
          {' '}
          you are referring to cannot be found,
          please back to

          {' '}
          <Link
            href="/"
            className="text-sky-600 underline underline-offset-4"
          >
            Home page
          </Link>

          {' '}
          or
          {' '}

          <Link
            href={type === 'projects' ? '/projects' : '/blog'}
            className="text-sky-600 underline underline-offset-4"
          >
            {type === 'projects' ? 'Projects' : 'Blog'}
            {' '}
            Page
          </Link>
        </p>
      </div>
    </section>
  );
}
