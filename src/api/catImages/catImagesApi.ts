import { catApi } from "..";
import { michiTag } from "../tags";
import {
  getCatImagesPagination,
  getCatImagesResponnse,
  getCatVotesResponse,
  postVotesParams,
} from "./catImagesTypes";

export const catsImages = catApi.injectEndpoints({
  endpoints: (builder) => ({
    getCatImages: builder.query<getCatImagesResponnse, getCatImagesPagination>({
      query: ({ ...rest }) => ({
        url: "/images/search",
        method: "GET",
        params: { ...rest },
      }),
    }),
    postVote: builder.mutation<void, postVotesParams>({
      query: ({ ...rest }) => ({
        url: "/votes",
        method: "POST",
        body: { ...rest, sub_id: "user-sa101129" },
      }),
      invalidatesTags: [michiTag],
    }),
    getVotes: builder.query<getCatVotesResponse[], void>({
      query: () => ({
        url: "/votes",
        method: "GET",
        params: { sub_id: "user-sa101129" },
      }),
      providesTags: [michiTag],
    }),
  }),
});

export const { useGetCatImagesQuery, useGetVotesQuery, usePostVoteMutation } =
  catsImages;
