'use client';

import * as React from 'react';
import useIsMobile from '@/libs/hooks/useIsMobile';
import { MdxFileProps } from '@/types/mdx';
import ControlBlogPost from '../../../common/ControlBlogPost';
import PresentingProjectContents from './PresentingProjectContents';

type ProjectContentsProps = {
  dataSort: {
    oldest: MdxFileProps[] | []
    latest: MdxFileProps[] | []
  }
};

export default function ProjectContents({ dataSort }: ProjectContentsProps) {
  const [currentLayout, setCurrentLayout] = React.useState<'list' | 'grid'>(
    'grid',
  );
  const [selectPost, setSelectPost] = React.useState('latest');
  const { isMobileViewport } = useIsMobile();

  const currentData = selectPost === 'latest' ? dataSort.latest : dataSort.oldest;

  React.useEffect(() => {
    if (isMobileViewport) setCurrentLayout('grid');
  }, [isMobileViewport]);

  return (
    <section className="px-8 sm:pt-0 pb-8">
      <ControlBlogPost
        currentLayout={currentLayout}
        selectPost={selectPost}
        setSelectPost={setSelectPost}
        setCurrentLayout={setCurrentLayout}
      />
      <PresentingProjectContents
        data={currentData}
        currentLayout={currentLayout}
      />
    </section>
  );
}
