import * as React from 'react';
import Line from '@/components/Decoration/Line';
import { MetadataProject } from '@/types/mdx';
import MarqueeElement from '@/components/MarqueeElement';
import StackBadge from '@/components/Badge/StackBadge';
import ArticleContent from '../common/ArticleContent';
import ImageHeadSvg from '../common/ImageSvg';

type PageBodyProjectProps = {
  data: MetadataProject
  mdxContent: string
};
export default function PageBodyProject({ data, mdxContent }: PageBodyProjectProps) {
  return (
    <section className="px-8 pb-0 sm:py-0">
      <ImageHeadSvg src={data.image} alt={`Image cover blog ${data.title}`} />

      <ArticleContent mdxContent={mdxContent} />

      <Line className="my-8" size="sm" />

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">
          Tech Stack:
        </h2>
        <MarqueeElement>
          {[...data.stacks, ...data.stacks].map((stack) => (
            <StackBadge icon={stack} text={stack} />
          ))}
        </MarqueeElement>
      </div>
    </section>
  );
}
