'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuMaximize } from 'react-icons/lu';
import cn from '@/libs/utils/cn';
import Tooltip from '../Tooltip';

type CardMemeProps = {
  src: string
  alt: string
  href: string
  className?: string
};

export default function CardMeme({
  src, alt, href, className = '', ...other
}: CardMemeProps) {
  const [hideImageError, setHideImageError] = React.useState(false);
  const [isLoadingImage, setisLoadingImage] = React.useState(false);

  return (
    <div
      className={cn(
        'group relative overflow-hidden hover:scale-105 transition-all duration-300 rounded-lg',

        className,
      )}
      {...other}
    >
      {
      !hideImageError && (
        <Image
          src={src}
          alt={alt}
          width={750}
          height={750}
          loading="lazy"
          className="rounded-lg"
          onLoad={() => setisLoadingImage(true)}
          onLoadingComplete={() => setisLoadingImage(false)}
          onError={() => {
            setHideImageError(true);
          }}
        />
      )
      }

      {
        isLoadingImage && (
          <div className="absolute backdrop-blur-xl bg-stone-50/10 w-full h-full top-0 left-0 center rounded-lg" />
        )
      }

      <div className="absolute bg-stone-950/60 w-full h-full top-full left-0 center group-hover:top-0 transition-all duration-300 rounded-lg">
        <Tooltip title="Maximize">
          <Link href={href} target="_blank" className="cursor-zoom-in">
            <LuMaximize className="text-4xl text-stone-50" />
          </Link>
        </Tooltip>
      </div>
    </div>
  );
}
