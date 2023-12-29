export type DataMeme = {
  url: string
  source: string
};

export type ResponseMeme = {
  status: number
  total: number
  end_point: string
  method: string
  data: DataMeme[]
};

export type ResponseJokes = {
  status: number
  total: number
  end_point: string
  method: string
  data: string[]
};
