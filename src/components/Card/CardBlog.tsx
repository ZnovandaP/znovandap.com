import * as React from 'react';
import { MdAccessTime } from 'react-icons/md';
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
  const datePostFormat = moment(data.date).format('ll');
  const postTimeAgo = moment(data.date).fromNow();

  return (
    <Link href={`blog/post/${slug}`} key={data.title} data-aos="fade-up">
      <Card>
        <Card.CardMedia
          src={data.image}
          alt={`Image head ${data.title}`}
        />

        <Card.CardContent>
          <div className="flex flex-col gap-2">
            <h2
              className="text-xl font-semibold hover:underline hover:text-sky-600 line-clamp-1"
            >
              {data.title}
            </h2>

            <div className="flex items-center justify-between text-sm font-medium ">
              <p className="opacity-70">
                {`${datePostFormat} - ${postTimeAgo}`}
              </p>
              <p className="center gap-1 opacity-80">
                <MdAccessTime />
                {`${data.readingDuration} minute`}
              </p>
            </div>

            <p className="font-medium hyphens-auto line-clamp-3">
              {data.subtitle}
            </p>
          </div>

          <div className="mt-4 flex items-center gap-2">
            {data.tags?.map((stack) => (
              <BadgeTags stack={stack} />
            ))}
          </div>
        </Card.CardContent>
      </Card>
    </Link>
  );
}
