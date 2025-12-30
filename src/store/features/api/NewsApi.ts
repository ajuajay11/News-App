import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
 import type {User, Posts} from '../../../types/Type'
 
export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (build) => ({
    getPosts: build.query<Posts[], void>({
      query: () => `/posts`,
    }),
    getUsers: build.query<User[], void>({
      query: () => `/users`,
    }),
    getPostById: build.query<Posts, number>({
      query: (id) => `/posts/${id}`,
    }),
  }),
})

export const { useGetPostsQuery, useGetUsersQuery, useGetPostByIdQuery } = newsApi;