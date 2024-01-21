'use client';

import * as React from 'react';
import CardBlog from '@/components/Card/CardBlog';
import CardContainer from '@/views/common/CardContainer';
import CardListBlog from '@/components/Card/CardListBlog';
import { MdxFileProps, MetadataBlog } from '@/types/mdx';

type PresentingBlogContentsProps = {
  dataCurrentBlogPost: MdxFileProps[],
  currentLayout: 'grid' | 'list'
};

export default function PresentingBlogContents(
  { dataCurrentBlogPost, currentLayout }: PresentingBlogContentsProps,
) {
  return (
    <section>

      {currentLayout === 'grid' && (
        <CardContainer>
          {dataCurrentBlogPost.map((post) => (
            <CardBlog data={post?.frontMatter as MetadataBlog} slug={post?.slug} key={post?.id} />
          ))}
        </CardContainer>
      )}

      {currentLayout === 'list' && (
        <div className="grid grid-cols-1 gap-8 mt-8">
          {dataCurrentBlogPost.map((post) => (
            <CardListBlog
              data={post?.frontMatter as MetadataBlog}
              slug={post?.slug}
              key={post?.id}
            />
          ))}
        </div>
      )}

    </section>
  );
}
