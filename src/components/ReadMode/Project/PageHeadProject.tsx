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
import { LuExternalLink } from 'react-icons/lu';
import Ping from '@/components/Ping';
import TitleHead from '../common/TitleHead';

type PageHeadProjectProps = {
  data: MetadataProject
};
export default function PageHeadProject({ data }: PageHeadProjectProps) {
  return (
    <section className="p-8 pb-0 sm:py-0">
      <div className="flex justify-between flex-wrap items-center mb-4">
        <ButtonBack  to="/projects" text="Back to Projects Menu" />
        <BadgeTags label={data?.workingType ? data?.workingType?.join(' + ') : 'Independent'} size="md" type='info-outline' className='flex-shrink-1 opacity-80' />
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

  const isPrivate = data?.visibility === 'Private'
  const isLiveProject = data?.status === 'Live'
  const isComingSoon = data?.status === 'Coming Soon'
  return (
    <div className="flex flex-col gap-y-4 mt-3 ">
      <div className="font-medium flex items-center gap-2">
        <span className="opacity-50">{`${formatDatePublishedBlog} - ${postTimeAgo}`}</span>
        {data.status && 
        <>
        |
        <BadgeTags 
        icon={<Ping type={isLiveProject ? 'success' : isComingSoon ? 'warning' : 'danger'} />}
        label={data.status} 
        size="sm" 
        type='default'
        className='text-nowrap'
        />
        </>}
      </div>

      <div className="flex flex-col gap-y-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center flex-wrap order-last sm:order-1 gap-4 ">
          {data.stacks?.map((stack) => (
            <Tooltip title={Icons[stack].name} key={stack}>
              <span className="md:text-3xl">
                {Icons[stack].icon}
              </span>
            </Tooltip>
          ))}
        </div>

        <div className="flex items-center gap-4 font-medium order-1 sm:order-last">
          <BadgeTags label={data.projectType} size="md" />
          |
         <div className="flex items-center gap-4">
          {
          !isPrivate ? (
            <Tooltip title="Repository">
              <Link href={data.repository} target="_blank" className="text-[26px] md:text-[1.7rem]">
                {Icons['github'].icon}
              </Link>
            </Tooltip>
          ) : (<BadgeTags icon={Icons['github'].icon} label={data.visibility} size="md" type='danger-outline'/>)
          }
          {
            isLiveProject && (
              <Tooltip title="Live Project">
                <Link href={data.livePreview} target="_blank" className="text-[26px] md:text-[1.7rem]">
                  <LuExternalLink />
                </Link>
              </Tooltip>
            )
            }
          </div>
          
        </div>
      </div>

    </div>
  );
}
