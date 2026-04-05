export type MetadataBlog = {
  title: string
  subtitle: string
  date: string
  image: string
  tags: string[]
  language: 'Bahasa Indonesia' | 'Engglish'
  readingDuration: number // in minute
};

export type MetadataProject = {
  title: string
  subtitle: string
  date: string
  image: string
  thumbnail: string
  theme: string
  stacks: string[]
  projectType: string
  repository: string
  livePreview: string
  visibility: 'Public' | 'Private',
  workingType: ('Fulltime' | 'Internship' | 'Part-time' | 'Independent')[]
  status: 'Live' | 'Not Live' | 'Coming Soon'
};

export type MdxFileProps = {
  id:string
  slug: string
  frontMatter: Record<string, unknown>
  content: string
};
