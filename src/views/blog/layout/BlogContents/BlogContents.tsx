'use client';

import * as React from 'react';
import useIsMobile from '@/libs/hooks/useIsMobile';
import ControlBlogPost from '../../../common/ControlBlogPost';
import PresentingBlogContents from './PresentingBlogContents';

export default function BlogContents() {
  const [currentLayout, setCurrentLayout] = React.useState<'list' | 'grid'>(
    'grid',
  );
  const [selectPost, setSelectPost] = React.useState('latest');
  const { isMobileViewport } = useIsMobile();

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
      <PresentingBlogContents
        sortByDate={selectPost}
        currentLayout={currentLayout}
      />
    </section>
  );
}
