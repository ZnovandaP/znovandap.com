import Image from 'next/image';
import * as React from 'react';

type ImageHeadProps = {
  src: string
  alt: string
};

export default function ImageHead({ src, alt }: ImageHeadProps) {
  return (
    <div className="center rounded-lg overflow-hidden">
      <Image
        src={src}
        alt={`Image cover blog ${alt}`}
        width={800}
        height={800}
        priority
        className="w-full h-56 sm:h-72 md:h-80 lg:h-[350px] xl:h-[400px] rounded-lg object-cover object-center hover:scale-110 transition duration-300"
      />
    </div>
  );
}
