'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

export default function Prologue() {
  return (
    <div className="relative">
      <h1
        className="center flex-col gap-2 text-[4rem] leading-none text-center text-balance font-inter font-extrabold uppercase "
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
        className="center overflow-hidden bg-stone-100/5 backdrop-blur-sm rounded-full shadow-lg shadow-stone-600/80 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 hover:backdrop-blur-none hover:scale-105 transition-all duration-300"
      >
        <Image
          src="/author.png"
          alt="Author"
          priority
          width={200}
          height={200}
          className="w-[130px] h-[130px] object-cover object-center"
        />
      </motion.div>
    </div>
  );
}
