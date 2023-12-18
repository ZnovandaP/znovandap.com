'use client';

import * as React from 'react';
import useSWR from 'swr';
import CardBlog from '@/components/Card/CardBlog';
import CardContainer from '@/views/common/CardContainer';
import getDataBlogPostSortBy from '@/service/blog-post-fetcher';
import CardListBlog from '@/components/Card/CardListBlog';
import SkeletonCardBlog from '@/components/Skeleton/SkeletonCardBlog';
import SkeletonCardListBlog from '@/components/Skeleton/SkeletonCardListBlog';

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
      {isLoading && currentLayout === 'grid' ? (
        <CardContainer>
          {Array.from(new Array(6).keys()).map((key) => (
            <SkeletonCardBlog key={key} />
          ))}
        </CardContainer>
      ) : null}

      {isLoading && currentLayout === 'list' ? (
        <div className="grid grid-cols-1 gap-8 mt-8">
          {Array.from(new Array(6).keys()).map((key) => (
            <SkeletonCardListBlog key={key} />
          ))}
        </div>
      ) : null}

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
