import * as React from 'react';
import Link from 'next/link';
import Tooltip from '@/components/Tooltip';
import Card from '@/components/Card/Card';
import Icons from '@/constant/icons';
import dataProjects from '@/constant/data-projects';

export default function CardProjects() {
  return (
    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 xl:grid-cols-3">
      {dataProjects.slice(0, 3).map((data) => (
        <Link href={data.to} key={data.title}>
          <Card>
            <Card.CardMedia src={data.image.thumbnail} alt={`Project ${data.title}`} />
            <Card.CardContent>
              <div className="flex flex-col gap-2">
                <h2
                  style={{ color: data.theme }}
                  className="text-xl font-semibold hover:underline hover:decoration-wavy hover:underline-offset-[6px]"
                >
                  {data.title}
                </h2>
                <p className="font-medium hyphens-auto line-clamp-3">
                  {data.summary}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-4">
                {data.stacks?.map((stack) => (
                  <Tooltip title={stack} key={stack}>
                    {Icons[stack]}
                  </Tooltip>
                ))}
              </div>
            </Card.CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
