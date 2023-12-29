import axios from 'axios';
import { ResponseJokes, ResponseMeme } from '@/types/response-meme-jokes';

const baseUrl = 'https://candaan-api.vercel.app';

export const getDataMemes = async (): Promise<ResponseMeme> => {
  const response = await axios.get(`${baseUrl}/api/image`);

  if (response.status === 200) {
    return response.data;
  }
  throw new Error('Data Memes Not Fetched');
};

export const getDataJokes = async (): Promise<ResponseJokes> => {
  const response = await axios.get(`${baseUrl}/api/text`);

  if (response.status === 200) {
    return response.data;
  }
  throw new Error('Data jokes Not Fetched');
};
