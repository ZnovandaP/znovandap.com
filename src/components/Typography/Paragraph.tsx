import * as React from 'react';
import cn from '@/libs/utils/cn';

type ParagraphProps = {
  text: string
  className?: string
};

export default function Paragraph({ text, className = '' }: ParagraphProps) {
  return (
    <p className={cn(
      'font-medium mt-6 hyphens-auto',

      className,
    )}
    >
      {text}
    </p>
  );
}
