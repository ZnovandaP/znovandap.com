/* eslint-disable import/prefer-default-export */
import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { latestBlogPosts, oldestBlogPosts } from '@/libs/utils/sortPostBlogyDate';
import loadMdXFile from '@/libs/markdown';

export async function GET(request: NextRequest) {
  const headerInstance = headers();
  const { searchParams } = new URL(request.url);

  const apiKey = headerInstance.get('Api-Key') as string;

  if (apiKey === process.env.API_KEY) {
    if (searchParams.get('sort')) {
      if (searchParams.get('sort') === 'oldest') {
        const dataNewestPost = oldestBlogPosts();
        return NextResponse.json({
          success: true,
          data: dataNewestPost,
          message: 'Get data sort by oldest Blog Post is Success',
        }, { status: 200 });
      }

      if (searchParams.get('sort') === 'latest') {
        const dataNewestPost = latestBlogPosts();
        return NextResponse.json({
          success: true,
          data: dataNewestPost,
          message: 'Get data sort by latest Blog Post is Success',
        }, { status: 200 });
      }

      return NextResponse.json({
        success: false,
        data: [],
        message: 'Search params not avalible, please check the documentation',
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: loadMdXFile('blogs'),
      message: 'Get All data blog post is success',
    }, { status: 200 });
  }

  return NextResponse.json({
    success: false,
    data: [],
    message: 'Api Key is incorrect, please set correct Api Key',
  }, { status: 403 });
}
