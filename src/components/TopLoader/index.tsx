import * as React from 'react';
import NextTopLoader from 'nextjs-toploader';

export default function TopLoader() {
  return (
    <NextTopLoader
      color="#0ea5e9"
      easing="ease-in-out"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl
      showSpinner
      speed={200}
      shadow="0 0 10px #0284c7,0 0 5px #38bdf8"
    />
  );
}
