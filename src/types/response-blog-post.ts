import { MdxFileProps } from './mdx';

export type ResponseBlogPost = {
  success: boolean,
  data: MdxFileProps[]
  message: string
};
