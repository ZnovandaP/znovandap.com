import * as React from 'react';
import Link, { LinkProps } from 'next/link';
import cn from '@/libs/utils/cn';

type LinkInParagraphProps = {
  className?: string
  text: string
} & LinkProps;

export default function LinkInParagraph(props: LinkInParagraphProps) {
  const { className, text } = props;

  return (
    <Link
      {...props}
      className={cn(
        'text-blue-500',
        className,
      )}
      target="_blank"
    >
      {text}
    </Link>
  );
}
