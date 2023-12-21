import * as React from 'react';
import MdxComponent from '@/components/MdxComponent';

type ArticleContentProps = {
  mdxContent: string
};
export default function ArticleContent({ mdxContent }: ArticleContentProps) {
  return (
    <article className="mt-8">
      <MdxComponent>
        {mdxContent}
      </MdxComponent>
    </article>
  );
}
