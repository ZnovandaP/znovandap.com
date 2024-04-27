import * as React from 'react';
import Link from 'next/link';
import moment from 'moment';
import { IoMdTime } from 'react-icons/io';
import { MetadataBlog } from '@/types/mdx';
import BadgeTags from '../Badge/BadgeTags';
import Card from './Card';

type CardListBlogProps = {
  data: MetadataBlog
  slug: string
};
export default function CardListBlog({ data, slug }: CardListBlogProps) {
  const dateIsoFormat = new Date(data.date).toISOString();
  const datePostFormat = moment(dateIsoFormat).format('ll');
  const postTimeAgo = moment(dateIsoFormat).fromNow();
  return (
    <Link href={`blog/post/${slug}`} data-aos="fade-up">
      <Card className="group flex items-center">
        <Card.CardListMedia
          src={data.image}
          alt={`Image head ${data.title}`}
        />

        <Card.CardContent className="w-[70%] pl-0">
          <div className="flex flex-col gap-2">
            <h2
              className="text-xl font-semibold group-hover:underline group-hover:text-sky-600 line-clamp-1 hover:line-clamp-3"
            >
              {data.title}
            </h2>

            <div className="flex items-center gap-8 text-sm font-medium ">
              <p className="opacity-80">
                {`${datePostFormat} - ${postTimeAgo}`}
              </p>
              <p className="center gap-1 opacity-80 text-sky-600 dark:text-sky-300 font-medium">
                <IoMdTime className="text-base" />
                {`${data.readingDuration} min to read`}
              </p>
            </div>

            <p className="font-medium hyphens-auto">
              {data.subtitle}
            </p>
          </div>

          <div className="mt-4 flex items-center gap-3 flex-wrap">
            {data.tags?.map((stack) => (
              <BadgeTags stack={stack} key={stack} />
            ))}
          </div>
        </Card.CardContent>
      </Card>
    </Link>
  );
}
