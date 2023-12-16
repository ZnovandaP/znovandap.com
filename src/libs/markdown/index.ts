import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkMdx from 'remark-mdx';
import remarkParse from 'remark-parse';
import { MdxFileProps } from '@/types/mdx';

type FolderContents = 'blogs' | 'projects';

const generatedDirPath = (folder?: FolderContents) => {
  switch (folder) {
    case 'blogs':
      return path.join(process.cwd(), 'src', 'contents', 'blogs');
    case 'projects':
      return path.join(process.cwd(), 'src', 'contents', 'projects');
    default:
      return path.join(process.cwd(), 'src', 'contents', 'blogs');
  }
};

const loadMdXFile = (folder?: FolderContents): MdxFileProps[] | [] => {
  const dirPath = generatedDirPath(folder);

  if (!fs.existsSync(dirPath)) return [];

  const filesMDX = fs.readdirSync(dirPath, 'utf-8');
  const contents = filesMDX.map((file) => {
    const filePath = path.join(dirPath, file);
    const sourceFile = fs.readFileSync(filePath, 'utf-8');
    const { content, data } = matter(sourceFile);

    const mdxCompiler = remark()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkMdx);

    const mdxContent = mdxCompiler.processSync(content).toString();

    return {
      slug: file.replace(/\.mdx?$/, ''),
      content: mdxContent,
      frontMatter: data,
    };
  });

  return contents;
};

export default loadMdXFile;
