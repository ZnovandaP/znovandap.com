import * as React from 'react';

type CardContainerProps = {
  children: React.ReactNode
};

export default function CardContainer({ children }: CardContainerProps) {
  return (
    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 xl:grid-cols-3">
      {children}
    </div>
  );
}
