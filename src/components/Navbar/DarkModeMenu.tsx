'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import dataDarkModeMenu from '@/constant/data-darkmode-menu';
import ButtonChangeTheme from '../Button/ButtonChangeTheme';

type DarkModeMenuProps = {
  isOpen: boolean;
};

const animate = {
  hidden: {
    height: 0,
    y: -120,
    opacity: 0,
    scale: 0,
  },
  visible: {
    height: 'auto',
    y: 0,
    opacity: 1,
    scale: 1,
  },
};

export default function DarkModeMenu({ isOpen }: DarkModeMenuProps) {
  const { theme, setTheme } = useTheme();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          className="flex flex-col items-center gap-1"
          variants={animate}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{
            type: 'spring',
            duration: 0.7,
            stiffness: 800,
            damping: 100,
          }}
        >
          {dataDarkModeMenu.map((data) => (
            <li key={data.theme}>
              <ButtonChangeTheme
                label={data.label}
                icon={(<data.icon />)}
                theme={data.theme}
                setTheme={setTheme}
                currentTheme={theme ?? 'system'}
              />
            </li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
}
