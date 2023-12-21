import DetailProjectViews from '@/views/projects/slug';
import * as React from 'react';

type DetailProjectsPageProps = {
  params: { slug: string }
};
export default function DetailProjectsPage({ params }: DetailProjectsPageProps) {
  return (
    <DetailProjectViews slug={params.slug} />
  );
}
