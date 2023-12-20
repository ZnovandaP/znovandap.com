'use client';

import cn from '@/libs/utils/cn';
import * as React from 'react';
import { LuClipboardCopy, LuCheckCircle } from 'react-icons/lu';
import { useCopyToClipboard } from 'usehooks-ts';

type ButtonCopyProps = {
  code: string
};

export default function ButtonCopy({ code }: ButtonCopyProps) {
  const [isCoppied, setIsCoppied] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [value, copy] = useCopyToClipboard();

  const handleCopyClipboard = () => {
    copy(code);
    setIsCoppied(true);
    timeoutRef.current = setTimeout(() => {
      setIsCoppied(false);
    }, 2000);
  };

  return (
    <button
      className={cn(
        'absolute right-4 top-4 center sm:text-xl p-2 rounded-full ring-1  hover:scale-110 active:scale-100 transition duration-300',

        isCoppied ? 'ring-green-500' : 'ring-stone-100',
      )}
      aria-label="Button Copy clipboard"
      type="button"
      onClick={handleCopyClipboard}
    >
      { !isCoppied
        ? (<LuClipboardCopy className="text-stone-100" />)
        : (<LuCheckCircle className="text-green-500" />)}
    </button>
  );
}
