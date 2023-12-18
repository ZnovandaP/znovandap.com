'use client';

import * as React from 'react';
import useSWR from 'swr';
import CardBlog from '@/components/Card/CardBlog';
import CardContainer from '@/views/common/CardContainer';
import getDataBlogPostSortBy from '@/service/blog-post-fetcher';
import CardListBlog from '@/components/Card/CardListBlog';

type PresentingBlogContentsProps = {
  sortByDate: string
  currentLayout: 'grid' | 'list'
};

const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;

export default function PresentingBlogContents(
  { sortByDate, currentLayout }: PresentingBlogContentsProps,
) {
  const { data, error, isLoading } = useSWR(
    `${baseUrl}/api/blogpost?sort=${sortByDate}`,
    getDataBlogPostSortBy,
    {
      revalidateOnMount: true,
    },
  );

  return (
    <section>
      {isLoading && (
        <p className="text-2xl font-semibold">Loading...</p>
      )}

      {currentLayout === 'grid' && (
        <CardContainer>
          {data?.data?.map((post) => (
            <CardBlog data={post?.frontMatter} slug={post?.slug} key={post?.id} />
          ))}
        </CardContainer>
      )}

      {currentLayout === 'list' && (
        <div className="grid grid-cols-1 gap-8 mt-8">
          {data?.data?.map((post) => (
            <CardListBlog
              data={post?.frontMatter}
              slug={post?.slug}
              key={post?.id}
            />
          ))}
        </div>
      )}

    </section>
  );
}
