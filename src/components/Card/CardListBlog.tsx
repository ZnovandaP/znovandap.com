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
  const datePostFormat = moment(data.date).format('ll');
  const postTimeAgo = moment(data.date).fromNow();
  return (
    <Link href={`blog/post/${slug}`} data-aos="fade-up">
      <Card className="flex items-center">
        <Card.CardListMedia
          src={data.image}
          alt={`Image head ${data.title}`}
        />

        <Card.CardContent>
          <div className="flex flex-col gap-2">
            <h2
              className="text-xl font-semibold hover:underline hover:text-sky-600"
            >
              {data.title}
            </h2>

            <div className="flex items-center gap-8 text-sm font-medium ">
              <p className="opacity-70">
                {`${datePostFormat} - ${postTimeAgo}`}
              </p>
              <p className="center gap-1 opacity-80 text-sky-500">
                <IoMdTime className="text-base" />
                {`${data.readingDuration} min to read`}
              </p>
            </div>

            <p className="font-medium hyphens-auto">
              {data.subtitle}
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
