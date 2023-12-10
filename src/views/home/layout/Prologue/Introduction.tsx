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
          development. Proficient in
          <LinkInParagraph
            text=" javascript,"
            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript"
          />
          <LinkInParagraph
            text=" Typescript "
            href="https://www.typescriptlang.org/"
          />
          and well-versed in all aspects of web technologies. currently focus on
          <LinkInParagraph text=" React.js " href="https://react.dev/" />
          and
          <LinkInParagraph text=" Next.js " href="https://nextjs.org/" />
          for web development technologies
        </p>
      </div>
    </SlideBottom>
  );
}
