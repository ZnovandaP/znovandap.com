'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { LuMoreHorizontal } from 'react-icons/lu';
import { IoCloseOutline } from 'react-icons/io5';
import useOpenNavStore from '@/libs/zustand/nav-menu-store';
import cn from '@/libs/utils/cn';

type ButtonMoreProps = {
  handleClick: (e?: React.MouseEvent<HTMLButtonElement>) => void
  className?: string,
};

const animate = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

export default function ButtonMore({ handleClick, className }: ButtonMoreProps) {
  const isOpen = useOpenNavStore((state) => state.isOpen);

  return (
    <button
      onClick={handleClick}
      className={cn(
        'p-[6px] text-2xl flex items-center rounded-full ring-1 ring-stone-500/50 hover:ring-stone-600 active:scale-90 transition-all sm:ml-4 md:ml-0',

        className,
      )}
      aria-label="more button"
      type="button"
    >
      {isOpen && (
      <motion.span
        variants={animate}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <IoCloseOutline />
      </motion.span>
      ) }

      {!isOpen && (
        (
        <motion.span
          variants={animate}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <LuMoreHorizontal />
        </motion.span>
        )
      )}
    </button>
  );
}
