import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
 
export type Posts={
    userId: number,
    id: number,
    title: string,
    body: string
}

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (build) => ({
    getPosts: build.query<Posts[], void>({
      query: () => `/posts`,
    }),
    getUsers: build.query({
      query: () => `/users`,
    }),
  }),
})

export const { useGetPostsQuery, useGetUsersQuery  } = newsApi;