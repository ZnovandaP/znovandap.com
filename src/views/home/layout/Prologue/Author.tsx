'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import cn from '@/libs/utils/cn';

const myFullname = [
  {
    text: 'zidane',
    delay: 0,
  },
  {
    text: 'novanda',
    delay: 0.5,
  },
  {
    text: 'putra',
    delay: 0.75,
  },
];

const animate = {
  hidden: {
    y: '3rem',
    opacity: '0',
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Author() {
  return (
    <div className="relative">
      <h1
        className={cn(
          'center flex-col gap-2 text-[4rem] leading-none text-center text-balance font-inter font-extrabold uppercase',

          'sm:gap-0 sm:text-[6.5rem] md:text-[7.5rem] lg:text-[8rem]',
        )}
      >
        {myFullname.map((item) => (
          <motion.span
            key={item.text}
            variants={animate}
            initial="hidden"
            animate="visible"
            transition={{
              type: 'spring',
              duration: 1,
              stiffness: 400,
              damping: 80,
              delay: item.delay,
            }}
          >
            {item.text}
          </motion.span>
        ))}
      </h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="group center overflow-hidden bg-stone-100/5 backdrop-blur-sm rounded-full shadow-lg shadow-stone-600/80 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 hover:backdrop-blur-none hover:scale-105 transition-all duration-300"
      >
        <Image
          src="/author.webp"
          alt="Author"
          priority
          width={500}
          height={500}
          className={cn(
            'w-[130px] h-[130px] object-cover object-center group-hover:scale-110',

            'sm:w-[150px] sm:h-[150px]',

            'md:w-[170px] md:h-[170px]',

            'lg:w-[180px] lg:h-[180px]',
          )}
        />
      </motion.div>
    </div>
  );
}
