import * as React from 'react';
import GroupButtonChangeLayout from './GroupButtonChangeLayout';
import SelectSortPost from './SelectSortPost';

type ControlBlogPostProps = {
  selectPost: string
  setSelectPost: React.Dispatch<React.SetStateAction<string>>
  currentLayout: 'grid' | 'list'
  setCurrentLayout: React.Dispatch<React.SetStateAction<'list' | 'grid'>>
};
export default function ControlBlogPost(props: ControlBlogPostProps) {
  const {
    selectPost, setSelectPost, currentLayout, setCurrentLayout,
  } = props;
  return (
    <div className="flex items-center justify-end gap-8 w-full">
      <SelectSortPost
        selectPost={selectPost}
        setSelectPost={setSelectPost}
      />
      <GroupButtonChangeLayout
        currentLayout={currentLayout}
        setCurrentLayout={setCurrentLayout}
      />
    </div>
  );
}
