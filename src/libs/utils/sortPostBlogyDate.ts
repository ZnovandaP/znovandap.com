import type { MetadataBlog } from '@/types/mdx';
import loadMdXFile from '../markdown';

export const latestPostBlogs = () => {
  const getAllPostBlogs = loadMdXFile('blogs');

  return getAllPostBlogs.sort((post1, post2) => {
    const data1 = post1.frontMatter as MetadataBlog;
    const data2 = post2.frontMatter as MetadataBlog;

    return new Date(data2.date).getTime() - new Date(data1.date).getTime();
  });
};

export const oldestPostBlog = () => {
  const getAllPostBlogs = loadMdXFile('blogs');

  return getAllPostBlogs.sort((post1, post2) => {
    const data1 = post1.frontMatter as MetadataBlog;
    const data2 = post2.frontMatter as MetadataBlog;

    return new Date(data1.date).getTime() - new Date(data2.date).getTime();
  });
};
