/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from 'react';
import ButtonBack from '@/components/Button/ButtonBack';
import Line from '@/components/Decoration/Line';
import { MetadataProject } from '@/types/mdx';
import moment from 'moment';
import BadgeTags from '@/components/Badge/BadgeTags';
import Tooltip from '@/components/Tooltip';
import Icons from '@/constant/icons';
import Link from 'next/link';
import { LuEye } from 'react-icons/lu';
import TitleHead from '../common/TitleHead';

type PageHeadProjectProps = {
  data: MetadataProject
};
export default function PageHeadProject({ data }: PageHeadProjectProps) {
  return (
    <section className="p-8 pb-0 sm:py-0">
      <div className="flex">
        <ButtonBack className="mb-4" to="/projects" text="Back to Projects Menu" />
      </div>

      <TitleHead title={data.title} subtitle={data.subtitle} theme={data.theme} />

      <AdditionalInformation data={data} />

      <Line size="sm" className="my-8" />
    </section>
  );
}

function AdditionalInformation({ data }: { data: MetadataProject }) {
  const formatDatePublishedBlog = moment(data.date).format('LL');
  const postTimeAgo = moment(data.date).fromNow();

  return (
    <div className="flex flex-col gap-y-4 mt-3 ">
      <p className="font-medium opacity-50">
        {`${formatDatePublishedBlog} - ${postTimeAgo}`}
      </p>

      <div className="flex flex-col gap-y-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center flex-wrap order-last sm:order-1 gap-4 ">
          {data.stacks?.map((stack) => (
            <Tooltip title={stack} key={stack}>
              <span className="md:text-3xl">
                {Icons[stack]}
              </span>
            </Tooltip>
          ))}
        </div>

        <div className="flex items-center gap-4 font-medium order-1 sm:order-last">
          <BadgeTags size="md" stack={data.projectType} />
          |
          <div className="flex items-center gap-4">
            <Tooltip title="Repository">
              <Link href={data.repository} target="_blank" className="text-[26px] md:text-4xl">
                {Icons.Github}
              </Link>
            </Tooltip>
            <Tooltip title="Live">
              <Link href={data.livePreview} target="_blank" className="text-[26px] md:text-4xl">
                <LuEye />
              </Link>
            </Tooltip>
          </div>
        </div>
      </div>

    </div>
  );
}

/* sm:flex-row sm:items-center gap-y-2 gap-x-8 mt-2  */
