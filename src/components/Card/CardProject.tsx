import * as React from 'react';
import Link from 'next/link';
import moment from 'moment';
import Icons from '@/constant/icons';
import { MetadataProject } from '@/types/mdx';
import Tooltip from '../Tooltip';
import Card from './Card';

type CardProjectProps = {
  data: MetadataProject
  slug: string
};
export default function CardProject({ data, slug }: CardProjectProps) {
  const dateIsoFormat = new Date(data.date).toISOString();
  const datePostFormat = moment(dateIsoFormat).format('LL');
  // const postTimeAgo = moment(dateIsoFormat).fromNow();

  return (
    <Link href={`projects/${slug}`} data-aos="fade-up">
      <Card className="group">
        <Card.CardMedia
          src={data.thumbnail}
          alt={`Image, Project ${data.title}`}
        />
        <Card.CardContent className="border-t-2 border-stone-400 dark:border-stone-600 h-[200px] flex flex-col">
          <div className="flex flex-col gap-2">
            <h2
              style={{ color: data.theme }}
              className="font-semibold group-hover:underline group-hover:underline-offset-[6px] group-hover:decoration-4 line-clamp-1"
            >
              {data.title}
            </h2>
            <p className="font-medium text-sm">
              {`${datePostFormat}`}
            </p>
            <p className="text-sm text-neutral-400 hyphens-auto line-clamp-3 lg:line-clamp-2 xl:line-clamp-3">
              {data.subtitle}
            </p>
          </div>

          <div className="mt-auto flex items-center gap-4">
            {data.stacks?.slice(0, 5)?.map((stack) => (
              <Tooltip title={stack} key={stack}>
                <span className="text-[21px]">
                  {Icons[stack]}
                </span>
              </Tooltip>
            ))}
          </div>
        </Card.CardContent>
      </Card>
    </Link>
  );
}
