/* eslint-disable @typescript-eslint/no-use-before-define */

'use client';

import * as React from 'react';
import moment from 'moment';
import { IoMdTime } from 'react-icons/io';
import { MetadataBlog } from '@/types/mdx';
import TitleHead from '../common/TitleHead';
import Line from '../../Decoration/Line';
import ButtonBack from '../../Button/ButtonBack';

type PageHeadProps = {
  data: MetadataBlog;
};

export default function PageHeadBlog({ data }: PageHeadProps) {
  return (
    <section className="p-8 pb-0 sm:py-0">
      <div className="flex">
        <ButtonBack className="mb-4" to="/blog" text="Back to Blog Menu" />
      </div>

      <TitleHead title={data.title} subtitle={data.subtitle} />

      <AdditionalInformation data={data} />

      <Line size="sm" className="my-8" />
    </section>
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
