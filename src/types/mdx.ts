export type MetadataBlog = {
  title: string
  subtitle: string
  date: string
  image: string
  tags: string[]
  language: 'Bahasa Indonesia' | 'Engglish'
  readingDuration: number // in minute
};

export type MdxFileProps = {
  slug: string
  frontMatter: MetadataBlog
  content: string
};
