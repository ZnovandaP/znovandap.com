'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type TooltipProps = {
  title: string
  children: React.ReactNode
};

const animate = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Tooltip({ title, children }: TooltipProps) {
  const [isVisibleTooltip, setIsVisibleTooltip] = React.useState(false);

  const handleVisibleTooltip = () => setIsVisibleTooltip(true);

  const handleHiddenTooltip = () => setIsVisibleTooltip(false);
  return (
    <div className="relative">
      <div
        className="text-2xl"
        onMouseEnter={handleVisibleTooltip}
        onMouseLeave={handleHiddenTooltip}
      >
        {children}
      </div>

      <AnimatePresence>
        {isVisibleTooltip && (
        <motion.div
          className="absolute -top-10"
          variants={animate}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{
            type: 'spring',
            duration: 0.5,
            stiffness: 900,
            damping: 100,
          }}
        >
          <h4 className="bg-stone-100 dark:bg-stone-700 px-3 py-1 rounded-md text-sm font-medium">
            {title}
          </h4>
        </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
