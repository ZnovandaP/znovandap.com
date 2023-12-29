const chunksArray = <T>(array: T[], chunkPerItem: number) => {
  const chunkSize = Math.ceil(array.length / chunkPerItem);
  const arrayChunks = Array.from(new Array(chunkSize));

  return arrayChunks.map((_, index) => {
    const start = index * chunkPerItem;
    const end = (index + 1) * chunkPerItem;
    return array.slice(start, end);
  });
};

export default chunksArray;
