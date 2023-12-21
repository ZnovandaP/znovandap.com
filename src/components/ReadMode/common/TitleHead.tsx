import * as React from 'react';

type TitleHeadProps = {
  title: string
  subtitle: string
  theme?: string
};

export default function TitleHead({ subtitle, title, theme = '' }: TitleHeadProps) {
  return (
    <div className="flex flex-col gap-3">
      <h1
        style={{ color: theme }}
        className="flex items-center gap-2 text-balance text-3xl font-bold sm:text-4xl lg:text-5xl"
      >
        {title}
      </h1>
      <h3 className="text-lg md:text-xl font-medium opacity-80">
        {subtitle}
      </h3>
    </div>
  );
}
