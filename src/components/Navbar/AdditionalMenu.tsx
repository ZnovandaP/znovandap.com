'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cn from '@/libs/utils/cn';

type AdditonalMenuProps = {
  isOpenMenu: boolean
  isOpenDarkMenu?: boolean
  isMobile?: boolean
  children: React.ReactNode
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

export default function AdditionalMenu({
  isOpenMenu, isOpenDarkMenu, children, isMobile,
}: AdditonalMenuProps) {
  return (
    <li>
      <AnimatePresence>
        {isOpenMenu && (
        <motion.div
          variants={animate}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{
            type: 'spring',
            duration: 0.7,
            stiffness: 850,
            damping: 100,
          }}
          className={cn(
            'absolute w-[217px] p-4 bg-stone-100 dark:bg-stone-900 ring-2 ring-stone-500/30 shadow-md shadow-stone-400/50 rounded-md',

            isMobile
              ? `${isOpenDarkMenu ? '-top-[22rem]' : '-top-[14rem]'}  left-[5rem] transition-all duration-500`
              : 'top-24 right-0',
          )}
        >
          {children}
        </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
