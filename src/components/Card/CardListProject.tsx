'use client';

/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from 'react';
import Link from 'next/link';
import moment from 'moment';
import { LuEye } from 'react-icons/lu';
import { MetadataProject } from '@/types/mdx';
import Icons from '@/constant/icons';
import Card from './Card';
import Tooltip from '../Tooltip';

type CardListProjectProps = {
  data: MetadataProject
  slug: string
};
export default function CardListProject({ data, slug }: CardListProjectProps) {
  const dateIsoFormat = new Date(data.date).toISOString();
  const datePostFormat = moment(dateIsoFormat).format('ll');
  const postTimeAgo = moment(dateIsoFormat).fromNow();
  return (
    <section className="relative" data-aos="fade-up">
      <Link href={`projects/${slug}`}>
        <Card className="group flex items-center">
          <Card.CardListMedia
            src={data.thumbnail}
            alt={`Image head ${data.title}`}
          />

          <Card.CardContent className="w-[70%] pl-0">
            <div className="flex flex-col gap-2">
              <h2
                style={{ color: data.theme }}
                className="text-xl font-semibold group-hover:underline group-hover:underline-offset-[6px] group-hover:decoration-4 line-clamp-1"
              >
                {data.title}
              </h2>
              <p className="opacity-80">
                {`${datePostFormat} - ${postTimeAgo}`}
              </p>
              <p className="font-medium hyphens-auto line-clamp-3">
                {data.subtitle}
              </p>
            </div>

            <div className="mt-4 flex items-center gap-4">
              {data.stacks?.slice(0, 5)?.map((stack) => (
                <Tooltip title={stack} key={stack}>
                  {Icons[stack]}
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
  return (
    <div className="absolute bottom-4 right-10 flex items-center gap-4">
      <Tooltip title="Repository">
        <Link href={data.repository} target="_blank" className="text-[2rem]">
          {Icons.Github}
        </Link>
      </Tooltip>
      <Tooltip title="Live">
        <Link href={data.livePreview} target="_blank" className="text-[2rem]">
          <LuEye />
        </Link>
      </Tooltip>
    </div>
  );
}
