import * as React from 'react';
import { IoMdTime } from 'react-icons/io';
import { MetadataBlog } from '@/types/mdx';
import Link from 'next/link';
import moment from 'moment';
import Card from './Card';
import BadgeTags from '../Badge/BadgeTags';

type CardBlogProps = {
  data: MetadataBlog
  slug: string
};

export default function CardBlog({ data, slug }: CardBlogProps) {
  const dateIsoFormat = new Date(data.date).toISOString();
  const datePostFormat = moment(dateIsoFormat).format('ll');
  const postTimeAgo = moment(dateIsoFormat).fromNow();

  return (
    <Link href={`blog/post/${slug}`} data-aos="fade-up">
      <Card className="group">
        <Card.CardMedia
          src={data.image}
          alt={`Image head ${data.title}`}
        />

        <Card.CardContent>
          <div className="flex flex-col gap-2">
            <h2
              className="text-xl font-semibold group-hover:underline group-hover:text-sky-600 line-clamp-1 hover:line-clamp-3"
            >
              {data.title}
            </h2>

            <p className="font-medium hyphens-auto line-clamp-3">
              {data.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-y-1 mt-2 text-sm font-medium ">
            <p className="flex order-2  opacity-80">
              {`${datePostFormat} - ${postTimeAgo}`}
            </p>
            <p className="flex order-1 gap-1 opacity-80 text-sky-600 dark:text-sky-300 font-medium">
              <IoMdTime className="text-base" />
              {`${data.readingDuration} min to read`}
            </p>
          </div>

          <div className="mt-4 flex items-center gap-2">
            {data.tags?.map((stack) => (
              <BadgeTags stack={stack} key={stack} />
            ))}
          </div>
        </Card.CardContent>
      </Card>
    </Link>
  );
}
