import * as React from 'react';
import Image from 'next/image';
import cn from '@/libs/utils/cn';

type CardProps = {
  children: React.ReactNode
  className?: string
};
export default function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={cn(
        'bg-stone-200 dark:bg-stone-800 shadow-lg shadow-stone-500/60 ring-2 ring-stone-500/60 rounded-lg overflow-hidden hover:scale-[1.025] active:scale-100 transition-all duration-300',

        className,
      )}
    >
      {children}
    </div>
  );
}

function CardMedia({ src, alt }: { src: string, alt: string }) {
  return (
    <div className="w-full h-[200px]">
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

function CardListMedia({ src, alt }: { src: string, alt: string }) {
  return (
    <div className="center py-6 pl-6">
      <Image
        src={src}
        alt={alt}
        width={600}
        height={600}
        loading="lazy"
        className="w-[260px] h-[150px] rounded-md"
      />
    </div>
  );
}

function CardContent({ children, className = '' }: CardProps) {
  return (
    <div className={`px-6 pt-4 pb-6 ${className}`}>
      {children}
    </div>
  );
}

Card.CardListMedia = CardListMedia;
Card.CardMedia = CardMedia;
Card.CardContent = CardContent;
