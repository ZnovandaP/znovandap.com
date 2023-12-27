import * as React from 'react';
import LinkInParagraph from '@/components/Link/LinkInParagraph';
import BadgeLocation from '@/components/LocationBadge';
import SlideBottom from '@/components/Animated/SlideBottom';

export default function Introduction() {
  return (
    <SlideBottom>
      <div className="mt-6 sm:mt-4 md:mt-3 lg:mt-1 center flex-col gap-8">
        <BadgeLocation />

        <p className="font-medium text-balance text-center">
          Passionate web development with strong focused on front-end web
          development. With a strong foundation in
          <LinkInParagraph
            text=" Javascript,"
            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript"
          />
          <LinkInParagraph
            text=" Typescript "
            href="https://www.typescriptlang.org/"
          />
          With a comprehensive understanding of various frontend libraries and frameworks.
          Currently focus on
          <LinkInParagraph text=" React.js " href="https://react.dev/" />
          and
          <LinkInParagraph text=" Next.js " href="https://nextjs.org/" />
          for web development technologies
        </p>
      </div>
    </SlideBottom>
  );
}
