import * as React from 'react';
import cn from '@/libs/utils/cn';

type CardJokesProps = {
  index: number
  data: string
};

export default function CardJokes({ data, index }: CardJokesProps) {
  return (
    <div
      className={cn(
        'p-6 rounded-md mt-8 shadow-lg shadow-stone-600/60',

        index % 2 === 1 && 'ring-2 ring-green-500',

        index % 2 === 0 && 'ring-2 ring-sky-500',
      )}
    >
      <h3
        className={cn(
          'text-lg font-medium',
        )}
      >
        {data}
      </h3>
    </div>
  );
}
