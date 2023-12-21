/* eslint-disable @typescript-eslint/no-use-before-define */

'use client';

import * as React from 'react';
import moment from 'moment';
import { IoMdTime } from 'react-icons/io';
import { MetadataBlog } from '@/types/mdx';
import Line from '../Decoration/Line';
import ButtonBack from '../Button/ButtonBack';

type PageHeadProps = {
  data: MetadataBlog
};

export default function PageHeadBlog({ data }: PageHeadProps) {
  return (
    <section className="p-8 pb-0 sm:py-0">
      <ButtonBack className="mb-4" to="/blog" />

      <Title data={data} />

      <AdditionalInformation data={data} />

      <Line size="sm" className="my-8" />
    </section>
  );
}

function Title({ data }: { data: MetadataBlog }) {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="flex items-center gap-2 text-balance text-3xl font-bold sm:text-4xl lg:text-5xl">
        {data.title}
      </h1>
      <h3 className="text-lg md:text-xl font-medium opacity-80">
        {data.subtitle}
      </h3>
    </div>
  );
}

function AdditionalInformation({ data }: { data: MetadataBlog }) {
  const formatDatePublishedBlog = moment(data.date).format('LL');
  const postTimeAgo = moment(data.date).fromNow();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-y-2 gap-x-8 mt-2 opacity-50">
      <p className="text-balance font-medium">
        {`${formatDatePublishedBlog} - ${postTimeAgo}`}
      </p>
      <div className="flex items-center gap-2 font-medium">
        <IoMdTime className="text-lg" />
        {`${data.readingDuration} min read`}
      </div>
    </div>
  );
}
