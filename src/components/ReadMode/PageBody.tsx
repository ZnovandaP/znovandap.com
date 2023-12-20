import * as React from 'react';
import { MetadataBlog } from '@/types/mdx';
import Image from 'next/image';
import Icons from '@/constant/icons';
import MdxComponent from '../MdxComponent';
import Line from '../Decoration/Line';

type PageBodyProps = {
  data: MetadataBlog
  mdxContent: string
};

export default function PageBody({ data, mdxContent }: PageBodyProps) {
  return (
    <section className="px-8 pb-0 sm:py-0">
      <div className="center rounded-lg overflow-hidden">
        <Image
          src={data.image}
          alt={`Image cover blog ${data.title}`}
          width={800}
          height={800}
          priority
          className="w-full h-56 sm:h-72 md:h-80 lg:h-[350px] xl:h-[400px] rounded-lg object-cover object-center hover:scale-110 transition duration-300"
        />
      </div>

      <article className="mt-8">
        <MdxComponent>
          {mdxContent}
        </MdxComponent>
      </article>

      <Line className="my-8" size="sm" />
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">
          Tags
        </h2>
        <div className="flex items-center gap-4 flex-wrap">
          {data.tags.map((tag) => (
            <div
              className="center gap-2 px-3 py-2 ring-1 ring-stone-500 rounded-full font-medium"
              key={tag}
            >
              {Icons[tag] && (
              <span className="text-xl">
                {Icons[tag]}
              </span>
              )}
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
