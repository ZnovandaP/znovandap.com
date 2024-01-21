import type { MetadataProject } from '@/types/mdx';
import loadMdXFile from '../markdown';

export const latestProjectPosts = () => {
  const getAllPostBlogs = loadMdXFile('projects');

  return getAllPostBlogs.sort((post1, post2) => {
    const data1 = post1.frontMatter as MetadataProject;
    const data2 = post2.frontMatter as MetadataProject;

    return new Date(data2.date).getTime() - new Date(data1.date).getTime();
  });
};

export const oldestProjectPosts = () => {
  const getAllPostBlogs = loadMdXFile('projects');

  return getAllPostBlogs.sort((post1, post2) => {
    const data1 = post1.frontMatter as MetadataProject;
    const data2 = post2.frontMatter as MetadataProject;

    return new Date(data1.date).getTime() - new Date(data2.date).getTime();
  });
};
