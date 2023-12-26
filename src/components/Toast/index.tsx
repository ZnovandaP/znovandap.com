import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cn from '@/libs/utils/cn';

type ToastProps = {
  type?: 'success' | 'failed'
  isShow: boolean
  text: string
  icon?: React.ReactElement
};

const animate = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Toast({
  type = 'success', isShow, text, icon,
}: ToastProps) {
  return (
    <AnimatePresence>
      {isShow && (
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
            'center fixed z-[9999] bottom-10 left-0 w-full',
          )}
        >
          <p className={cn(
            'center gap-2 font-medium text-center text-balance rounded-lg text-stone-100 px-6 py-4 ring-2',

            type === 'success' && 'bg-sky-600 ring-sky-300',
          )}
          >
            {icon ? (
              <span className="text-xl">
                {icon}
              </span>
            ) : null}
            {text}
          </p>
        </motion.div>
      )}
    </AnimatePresence>

  );
}
