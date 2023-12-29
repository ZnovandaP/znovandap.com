import * as React from 'react';
import { v4 } from 'uuid';
import CardJokes from '@/components/Card/CardJokes';

type JokesProps = {
  dataJokes: string[]
};

export default function Jokes({ dataJokes }: JokesProps) {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-8 mt-8" data-aos="fade-up">
      {
        dataJokes.map((data, index) => (
          <CardJokes key={v4()} data={data} index={index} />
        ))
      }
    </div>
  );
}
