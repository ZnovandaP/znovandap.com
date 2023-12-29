import * as React from 'react';
import Link from 'next/link';
import cn from '@/libs/utils/cn';

type ButtonTabEntertaimentProps = {
  searchParams: string
};
export default function ButtonTabEntertaiment({ searchParams }: ButtonTabEntertaimentProps) {
  return (
    <div className="center gap-6">
      <Link
        href="/entertaiment?page=memes"
        className={cn(
          'px-4 py-2 hover:ring-2 hover:ring-sky-600 font-medium rounded-lg',

          searchParams === 'memes' && 'ring-2 ring-sky-600',
        )}
      >
        memes
      </Link>

      <Link
        href="/entertaiment?page=jokes"
        className={cn(
          'px-4 py-2 hover:ring-2 hover:ring-green-600 font-medium rounded-lg',

          searchParams === 'jokes' && 'ring-2 ring-green-600',
        )}
      >
        Jokes
      </Link>
    </div>
  );
}
