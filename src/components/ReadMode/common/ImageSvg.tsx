import Image from 'next/image';
import * as React from 'react';

type ImageHeadSvgProps = {
  src: string
  alt: string
};

export default function ImageHeadSvg({ src, alt }: ImageHeadSvgProps) {
  return (
    <div className="center rounded-lg overflow-hidden w-full h-[10rem] sm:h-[13rem] md:h-[20rem] lg:h-[22rem]">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={800}
        priority
        className="w-full h-full rounded-lg hover:scale-110 transition duration-300"
      />
    </div>
  );
}
