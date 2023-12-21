import * as React from 'react';
import CardProject from '@/components/Card/CardProject';
import { MdxFileProps, MetadataProject } from '@/types/mdx';
import CardContainer from '@/views/common/CardContainer';
import CardListProject from '@/components/Card/CardListProject';

type PresentingProjectContensProps = {
  data: MdxFileProps[]
  currentLayout: 'grid' | 'list'
};

export default function PresentingProjectContents(
  { currentLayout, data }: PresentingProjectContensProps,
) {
  return (
    <section>
      {currentLayout === 'grid' && (
        <CardContainer>
          {data.map((dataProject) => {
            const project = dataProject.frontMatter as MetadataProject;

            return (
              <CardProject data={project} slug={dataProject.slug} key={dataProject.id} />
            );
          })}
        </CardContainer>
      )}

      {currentLayout === 'list' && (
        <div className="grid grid-cols-1 gap-8 mt-8">
          {data.map((post) => (
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
