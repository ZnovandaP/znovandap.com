import * as React from 'react';
import Card from '../Card/Card';

export default function SkeletonCardListBlog() {
  return (
    <Card className="flex items-center">
      <div className="center py-6 pl-6">
        <div className="w-[260px] h-[150px] rounded-md animate-pulse bg-stone-400 dark:bg-stone-700" />
      </div>

      <Card.CardContent>
        <div className="flex flex-col gap-2">
          <div className="w-[93%] h-6 animate-pulse rounded-md bg-stone-400 dark:bg-stone-700" />

          <div className="flex items-center gap-8 my-2">
            <div className="w-36 h-3 animate-pulse rounded-[4px] bg-stone-400 dark:bg-stone-700" />
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
