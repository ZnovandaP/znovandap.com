import Image from 'next/image';
import * as React from 'react';

type ImageHeadSvgProps = {
  src: string
  alt: string
};

export default function ImageHeadSvg({ src, alt }: ImageHeadSvgProps) {
  return (
    <div className="center rounded-lg overflow-hidden w-full h-[10rem] sm:h-[15rem] md:h-[22rem] lg:h-[25rem]">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={800}
        priority
        className="w-[950px] h-full rounded-lg hover:scale-110 transition duration-300"
      />
    </div>
  );
}
