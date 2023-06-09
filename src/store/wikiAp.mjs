import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const wikiApi = createApi({
  reducerPath: "wikiApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://en.wikipedia.org/w/api.php" }),
  endpoints: (builder) => ({
    getWikiSearch: builder.query({
      query: (srsearch) =>
        `?action=query&list=search&srsearch=${srsearch}&format=json&origin=*&srlimit=30`,
    }),
  }),
});
export const { useGetWikiSearchQuery } = wikiApi;
