import * as React from 'react';
import { AxiosError } from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { ResponseBlogPost } from '@/types/response-blog-post';

type ErrorResponseProps = {
  error: AxiosError
};
export default function ErrorResponse({ error }: ErrorResponseProps) {
  const data = error.response?.data as ResponseBlogPost;
  return (
    <div>
      <div className="w-full h-[15rem]">
        <Image
          src="/ilustration/response-error.svg"
          alt="Error response server"
          width={600}
          height={600}
          priority
          className="w-full h-full"
        />
      </div>

      <div className="text-xl font-medium text-balance text-center center flex-col gap-2 mt-6">
        <h2 className="text-2xl font-bold text-red-600">
          Error !!!
        </h2>

        <h3 className="text-red-600">
          {error.message}
        </h3>

        <p className="text-lg">
          {data.message}
        </p>

        <Link href="/" className="text-base text-sky-600 font-medium hover:underline">
          Back to home page
        </Link>
      </div>
    </div>
  );
}
