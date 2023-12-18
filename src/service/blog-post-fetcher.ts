import axios from 'axios';
import { ResponseBlogPost } from '@/types/response-blog-post';

const getDataBlogPostSortBy = async (endpoint:string): Promise<ResponseBlogPost> => {
  const response = await axios.get(endpoint, {
    headers: {
      'Api-Key': process.env.NEXT_PUBLIC_API_KEY,
    },
  });

  if (response.status === 200) {
    return response.data;
  }
  throw new Error('Data Net Fetched');
};

export default getDataBlogPostSortBy;
