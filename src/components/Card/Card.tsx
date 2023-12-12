import Image from 'next/image';
import * as React from 'react';

type CardProps = {
  children: React.ReactNode
};
export default function Card({ children }: CardProps) {
  return (
    <div
      className="bg-stone-200 dark:bg-stone-800 shadow-lg shadow-stone-500/60 ring-2 ring-stone-500/60 rounded-lg overflow-hidden hover:scale-[1.025] active:scale-100 transition-all duration-300"
    >
      {children}
    </div>
  );
}

function CardMedia({ src, alt }: { src: string, alt: string }) {
  return (
    <div className="w-full h-[250px]">
      <Image
        src={src}
        alt={alt}
        width={600}
        height={600}
        loading="lazy"
        className="w-full h-full rounded-tl-lg rounded-tr-lg object-cover object-top"
      />
    </div>
  );
}

function CardContent({ children }: CardProps) {
  return (
    <div className="px-6 pt-4 pb-6">
      {children}
    </div>
  );
}

Card.CardMedia = CardMedia;
Card.CardContent = CardContent;
