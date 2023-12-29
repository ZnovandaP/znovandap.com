import * as React from 'react';
import chunksArray from '@/libs/utils/chunks-array';
import { getDataJokes, getDataMemes } from '@/service/entertaiment-fetcher';
import ButtonTabEntertaiment from '../common/ButtonTabEntertaiment';
import Memes from './memes/Memes';
import Jokes from './jokes/Jokes';

export default async function EntertaimentView({ searchParams = 'memes' }: { searchParams: string }) {
  const memes = await getDataMemes();
  const chunkMemes = chunksArray(memes?.data, 10);

  const jokes = await getDataJokes();

  return (
    <section className="px-8 pb-0 sm:py-0">
      <ButtonTabEntertaiment searchParams={searchParams} />
      {
        searchParams === 'memes' && (
          <Memes dataChunks={chunkMemes} />
        )
      }

      {
        searchParams === 'jokes' && (
          <Jokes dataJokes={jokes?.data} />
        )
      }
    </section>
  );
}
