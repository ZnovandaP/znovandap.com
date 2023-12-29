'use client';

import * as React from 'react';
import { CgSpinner } from 'react-icons/cg';
import CardMeme from '@/components/Card/CardMeme';
import { DataMeme } from '@/types/response-meme-jokes';
import { useIntersectionObserver } from 'usehooks-ts';
import { v4 } from 'uuid';
import cn from '@/libs/utils/cn';

type MemesProps = {
  dataChunks: DataMeme[][]
};

export default function Memes({ dataChunks }: MemesProps) {
  const [currentData, setCurrentData] = React.useState<[] | typeof dataChunks[0]>([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const ref = React.useRef<null | HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  React.useEffect(() => {
    if (isVisible && currentIndex < dataChunks.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  React.useEffect(() => {
    if (currentIndex < dataChunks.length) {
      setCurrentData(
        [...currentData, ...dataChunks[currentIndex]],
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 mt-8" data-aos="fade-up">
        {
        currentData.map((data) => (
          <CardMeme
            src={data.url}
            alt={`image not found, meme from ${data.source}`}
            href={data.url}
            className="mt-8"
            key={v4()}
          />
        ))
      }
      </div>

      <div
        ref={ref}
        className={cn(
          currentIndex >= dataChunks.length - 1 ? 'hidden' : 'center mt-8',
        )}
      >
        <CgSpinner className="text-sky-600 text-7xl animate-spin" />
      </div>
    </>
  );
}
