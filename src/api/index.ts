export const API_BASE_URL: string =
  process.env.NEXT_PUBLIC_API_URL ?? "https://api.thecatapi.com/v1";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { michiTag } from "./tags";

export const createBaseQuery = (withKey: boolean) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: async (headers) => {
      const api = process.env.NEXT_PUBLIC_API_TOKEN;

      if (withKey && api) {
        headers.set("x-api-key", api);
      }

      return headers;
    },
  });
  return baseQuery;
};

export const catApi = createApi({
  reducerPath: "catApi",
  baseQuery: createBaseQuery(true),
  endpoints: () => ({}),
  tagTypes: [michiTag],
});
