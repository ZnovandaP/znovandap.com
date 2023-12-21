import * as React from 'react';
import Marquee from 'react-fast-marquee';

type MarqueeElementProps = {
  direction?: 'left' | 'right'
  children: React.ReactNode
};

export default function MarqueeElement({ children, direction = 'left' }: MarqueeElementProps) {
  return (
    <Marquee direction={direction} pauseOnHover speed={35} className="py-3 rounded-lg">
      {children}
    </Marquee>
  );
}
