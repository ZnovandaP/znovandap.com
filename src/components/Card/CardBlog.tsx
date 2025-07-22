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
  const datePostFormat = moment(dateIsoFormat).format('LL');

  return (
    <Link href={`blog/post/${slug}`} data-aos="fade-up">
      <Card className="group">
        <Card.CardMedia
          src={data.image}
          alt={`Image head ${data.title}`}
        />

        <Card.CardContent className="min-h-[212px] flex flex-col">
          <div className="flex flex-col gap-2 mb-2">
            <h2
              className="font-semibold group-hover:underline group-hover:text-sky-600 line-clamp-1 hover:line-clamp-3"
            >
              {data.title}
            </h2>

            <div className="flex justify-between items-center text-sm font-medium">
              <p className="flex font-medium text-nowrap">
                {`${datePostFormat}`}
              </p>
              <p className="flex gap-1 opacity-80 text-sky-600 dark:text-sky-300 font-medium text-nowrap">
                <IoMdTime className="text-base" />
                {`${data.readingDuration} min`}
              </p>
            </div>

            <p className="text-sm text-neutral-400 hyphens-auto line-clamp-3 lg:line-clamp-2 xl:line-clamp-3">
              {data.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 mt-auto">
            {data.tags?.map((stack) => (
              <BadgeTags stack={stack} key={stack} />
            ))}
          </div>
        </Card.CardContent>
      </Card>
    </Link>
  );
}
