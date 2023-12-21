import * as React from 'react';
import BadgeTags from '@/components/Badge/BadgeTags';

type TagsProps = {
  tags: string[]
};
export default function Tags({ tags }: TagsProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">
        Tags
      </h2>
      <div className="flex items-center gap-4 flex-wrap">
        {tags.map((tag) => (
          <BadgeTags size="md" stack={tag} key={tag} />
        ))}
      </div>
    </div>
  );
}
