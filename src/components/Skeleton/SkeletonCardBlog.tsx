import * as React from 'react';
import Card from '../Card/Card';

export default function SkeletonCardBlog() {
  return (
    <Card>
      <div className="w-full h-[200px] rounded-tl-lg rounded-tr-l animate-pulse bg-stone-400 dark:bg-stone-700" />

      <Card.CardContent className="h-[195px]">
        <div className="flex flex-col gap-2">
          <div className="w-[93%] h-6 animate-pulse rounded-md bg-stone-400 dark:bg-stone-700" />

          <div className="flex items-center justify-between my-2">
            <div className="w-20 h-3 animate-pulse rounded-[4px] bg-stone-400 dark:bg-stone-700" />
            <div className="w-16 h-3 animate-pulse rounded-[4px] bg-stone-400 dark:bg-stone-700" />
          </div>

          <div className="w-[90%] h-4 animate-pulse rounded-md bg-stone-400 dark:bg-stone-700" />
          <div className="w-[85%] h-4 animate-pulse rounded-md bg-stone-400 dark:bg-stone-700" />
          <div className="w-[80%] h-4 animate-pulse rounded-md bg-stone-400 dark:bg-stone-700" />
        </div>

        <div className="mt-4 flex items-center gap-2">
          {Array.from(new Array(3).keys()).map((key) => (
            <div className="w-24 h-[14px] animate-pulse rounded-full bg-stone-400 dark:bg-stone-700" key={key} />
          ))}
        </div>
      </Card.CardContent>
    </Card>
  );
}
