import cn from '@/libs/utils/cn';
import * as React from 'react';

type ContainerProps = {
  children: React.ReactNode
  className?: React.HTMLProps<HTMLElement>['className']
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <section
      className={cn(
        'mx-auto max-w-full',

        'sm:max-w-[640px]',

        'md:max-w-[800px]',

        'lg:max-w-[1024px]',

        'xl:max-w-[1150px]',

        className,
      )}
    >
      {children}
    </section>
  );
}
