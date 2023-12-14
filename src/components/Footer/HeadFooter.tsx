import * as React from 'react';

export default function HeadFooter() {
  return (
    <div className="flex flex-col gap-4" data-aos="fade-up">
      <h2 className="text-xl font-medium">🤝 Let&apos;s get in touch</h2>

      <p className="flex flex-col gap-1 hyphens-auto text-balance text-3xl text-stone-700/90 dark:text-stone-50 font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        <span>Have any project ideas?</span>
        <span>Ask me something about front-end web development?</span>
      </p>
    </div>
  );
}
