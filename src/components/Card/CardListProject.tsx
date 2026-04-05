'use client';

/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from 'react';
import Link from 'next/link';
import moment from 'moment';
import { LuExternalLink, LuEye } from 'react-icons/lu';
import { MetadataProject } from '@/types/mdx';
import Icons from '@/constant/icons';
import Card from './Card';
import Tooltip from '../Tooltip';
import BadgeTags from '../Badge/BadgeTags';
import Ping from '../Ping';

type CardListProjectProps = {
  data: MetadataProject
  slug: string
};
export default function CardListProject({ data, slug }: CardListProjectProps) {
  const dateIsoFormat = new Date(data.date).toISOString();
  const datePostFormat = moment(dateIsoFormat).format('LL');
  return (
    <section className="relative" data-aos="fade-up">
      <Link href={`projects/${slug}`}>
        <Card className="group flex items-center">
          <Card.CardListMedia
            src={data.thumbnail}
            alt={`Image head ${data.title}`}
          />

          <Card.CardContent className="w-[70%] pl-6">
            <div className="flex flex-col gap-2">
              <h2
                style={{ color: data.theme }}
                className="text-lg font-semibold group-hover:underline group-hover:underline-offset-[6px] group-hover:decoration-4 line-clamp-1"
              >
                {data.title}
              </h2>
              <div className="font-medium flex items-center gap-2">
                <span>{datePostFormat}</span>
                {
                  data.status && 
                  <>
                  |
                  <BadgeTags 
                  icon={<Ping type={data.status === 'Live' ? 'success' : data.status === 'Coming Soon' ? 'warning' : 'danger'} />}
                  label={data.status} 
                  size="sm" 
                  type='default'
                  className='text-nowrap'
                  />
                  </>
                }
              </div>
              <p className="text-sm text-neutral-400 hyphens-auto line-clamp-3">
                {data.subtitle}
              </p>
            </div>

            <div className="mt-4 flex items-center gap-4">
              {data.stacks?.slice(0, 5)?.map((stack) => (
                <Tooltip title={Icons[stack]?.name} key={stack}>
                  <span className="text-[21px]">
                    {Icons[stack]?.icon}
                  </span>
                </Tooltip>
              ))}
            </div>

          </Card.CardContent>
        </Card>
      </Link>
      <LinkForSourceProject data={{ data }} />
    </section>
  );
}

function LinkForSourceProject({ data: { data } }: { data: Pick<CardListProjectProps, 'data'> }) {
  const isPrivate = data?.visibility === 'Private'
  const isLiveProject = data?.status === 'Live'
  return (
    <div className="absolute bottom-4 right-10 flex items-center gap-4">
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
  );
}
