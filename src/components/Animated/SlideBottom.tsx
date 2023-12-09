'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

const animate = {
  hidden: {
    opacity: 0,
    y: '10rem',
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function SlideBottom({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={animate}
      initial="hidden"
      animate="visible"
      transition={{
        type: 'spring',
        duration: 0.7,
        stiffness: 400,
        damping: 80,
      }}
    >
      {children}
    </motion.div>
  );
}
