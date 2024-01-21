import * as React from 'react';
import CardProject from '@/components/Card/CardProject';
import { MdxFileProps, MetadataProject } from '@/types/mdx';
import CardContainer from '@/views/common/CardContainer';
import CardListProject from '@/components/Card/CardListProject';

type PresentingProjectContensProps = {
  dataCurrentBlogPost: MdxFileProps[]
  currentLayout: 'grid' | 'list'
};

export default function PresentingProjectContents(
  { currentLayout, dataCurrentBlogPost }: PresentingProjectContensProps,
) {
  return (
    <section>
      {currentLayout === 'grid' && (
        <CardContainer>
          {dataCurrentBlogPost.map((dataProject) => {
            const project = dataProject.frontMatter as MetadataProject;

            return (
              <CardProject data={project} slug={dataProject.slug} key={dataProject.id} />
            );
          })}
        </CardContainer>
      )}

      {currentLayout === 'list' && (
        <div className="grid grid-cols-1 gap-8 mt-8">
          {dataCurrentBlogPost.map((post) => (
            <CardListProject
              data={post?.frontMatter as MetadataProject}
              slug={post?.slug}
              key={post?.id}
            />
          ))}
        </div>
      )}
    </section>
  );
}
