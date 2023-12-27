import * as React from 'react';
import Line from '@/components/Decoration/Line';
import { LuCode2 } from 'react-icons/lu';
import MarqueeElement from '@/components/MarqueeElement';
import myTechStack from '@/constant/data-tech-stack';
import StackBadge from '@/components/Badge/StackBadge';

export default function TechStacksSection() {
  const techStacks = myTechStack.sort(() => Math.random() - 0.5);

  return (
    <section className="px-8 pb-0 sm:py-0">
      <Line size="sm" className="my-8" borderStyle="border-dashed" />

      <h3 className="flex items-center gap-2 text-xl font-semibold">
        <LuCode2 className="text-2xl" />
        My Tech Stacks
      </h3>

      <div className="mt-4">
        {Array.from(new Array(2).keys()).map((key) => (
          <MarqueeElement
            key={key}
            direction={key % 2 === 1 ? 'left' : 'right'}
          >
            {techStacks.map((stack) => (
              <StackBadge icon={stack} text={stack} />
            ))}
          </MarqueeElement>
        ))}
      </div>
    </section>
  );
}
