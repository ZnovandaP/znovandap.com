import * as React from 'react';
import { LuLayoutGrid, LuLayoutList } from 'react-icons/lu';
import ButtonChangeLayout from '@/components/Button/ButtonChangeLayout';

type GroupButtonChangeLayoutProps = {
  currentLayout: 'grid' | 'list'
  setCurrentLayout: React.Dispatch<React.SetStateAction<'list' | 'grid'>>
};
export default function GroupButtonChangeLayout({ currentLayout, setCurrentLayout }
: GroupButtonChangeLayoutProps) {
  return (
    <div className="gap-4 items-center hidden md:flex">
      <ButtonChangeLayout
        title="Grid"
        icon={<LuLayoutGrid />}
        isActive={currentLayout === 'grid'}
        onClick={() => setCurrentLayout('grid')}
      />

      <ButtonChangeLayout
        title="List"
        icon={<LuLayoutList />}
        isActive={currentLayout === 'list'}
        onClick={() => setCurrentLayout('list')}
      />
    </div>
  );
}
