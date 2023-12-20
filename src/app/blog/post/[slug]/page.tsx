import * as React from 'react';
import BlogPostViews from '@/views/blog/slug';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <BlogPostViews slug={params.slug} />
  );
}
