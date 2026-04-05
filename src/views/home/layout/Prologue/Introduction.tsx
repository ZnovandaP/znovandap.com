import * as React from 'react';
import LinkInParagraph from '@/components/Link/LinkInParagraph';
import BadgeLocation from '@/components/LocationBadge';
import SlideBottom from '@/components/Animated/SlideBottom';
import MdxComponent from '@/components/MdxComponent';

export default function Introduction() {
  return (
    <SlideBottom>
      <div className="mt-6 sm:mt-4 md:mt-3 lg:mt-1 center flex-col gap-8">
        <BadgeLocation />
        <div className="text-center">
        <MdxComponent>
          Passionate in ***software engineering*** with strong focused on `Fullstack Engineering`. Lately, I’ve been really interested in the field of `AI Engineering`. I have a strong foundation in `Typescript`, `PHP` and `Python`. Collaborative team player dedicated to delivering efficient, scalable, and maintainable software solutions, *and accustomed to working in a hybrid environment.*
        </MdxComponent>
        </div>
      </div>
    </SlideBottom>
  );
}