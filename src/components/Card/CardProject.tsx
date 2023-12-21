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
  const datePostFormat = moment(data.date).format('ll');
  const postTimeAgo = moment(data.date).fromNow();

  return (
    <Link href={`projects/${slug}`} data-aos="fade-up">
      <Card>
        <Card.CardMedia
          src={data.thumbnail}
          alt={`Image, Project ${data.title}`}
        />
        <Card.CardContent>
          <div className="flex flex-col gap-2">
            <h2
              style={{ color: data.theme }}
              className="text-xl font-semibold hover:underline hover:underline-offset-[6px] line-clamp-1"
            >
              {data.title}
            </h2>
            <p className="opacity-70">
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
  );
}
