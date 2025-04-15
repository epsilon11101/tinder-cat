export type getCatImagesPagination = {
  limit?: number;
  page?: number;
  order?: "ASC" | "DESC" | "RAND";
  has_breeds?: boolean;
};

type bread = {
  cat_frienly: string | null;
  description: string | null;
  child_friendly: number;
  dog_friendly: number;
  health_issues: number;
  hypoallergenic: number;
  intelligence: number;
  name: string;
  origin: string;
  temperament: string;
};
export type michiDataType = {
  gender: string;
  michiName: string;
  age: string;
};

export type getCatImagesResponnse = {
  id: string;
  url: string;
  breeds: bread[];
}[];

export type getCatVotesResponse = {
  id: string;
  image_id: string;
  sub_id: string;
  value: number;
  created_at: string;
  image: {
    id: string;
    url: string;
  };
};

export type postVotesParams = {
  image_id: string;
  value: number;
};
