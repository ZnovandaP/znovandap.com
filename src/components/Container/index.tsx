import cn from '@/libs/utils/cn';
import * as React from 'react';

type ContainerProps = {
  children: React.ReactNode
  className?: React.HTMLProps<HTMLElement>['className']
};

export default function Container({ children, className, ...other }: ContainerProps) {
  return (
    <section
      className={cn(
        'mx-auto max-w-full lg:pl-[59px]',

        'sm:max-w-[640px]',

        'md:max-w-[800px]',

        'lg:max-w-[975px]',

        className,
      )}
      {...other}
    >
      {children}
    </section>
  );
}
