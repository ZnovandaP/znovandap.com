import * as React from 'react';

type SelectSortPostProps = {
  selectPost: string
  setSelectPost: React.Dispatch<React.SetStateAction<string>>
};
export default function SelectSortPost({ selectPost, setSelectPost }: SelectSortPostProps) {
  return (
    <label htmlFor="sort_post" className="flex items-center gap-2 font-medium cursor-pointer">
      Sort by:
      <select
        className="p-2 rounded-lg bg-stone-100 dark:bg-stone-900 ring-1 ring-stone-500/60 focus:ring-sky-500 focus:outline-none cursor-pointer hover:ring-sky-500 active:ring-sky-500 transition-all duration-300"
        name="sort post"
        id="sort_post"
        value={selectPost}
        onChange={(e:React.ChangeEvent<HTMLSelectElement>) => setSelectPost(e.target.value)}
      >
        <option value="latest">Latest Post</option>
        <option value="oldest">Oldest Post</option>
      </select>
    </label>
  );
}
