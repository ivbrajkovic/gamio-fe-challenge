import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.API_URL;
const accessToken = process.env.ACCESS_TOKEN;

export const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    headers.set('xc-token', accessToken);
    return headers;
  },
});

type GetApiGetUserResponse = {};
type GetApiGetUserArg = string;

export const gamioApi = createApi({
  reducerPath: 'gamioApi',
  baseQuery,
  endpoints: (build) => ({
    getUser: build.query<GetApiGetUserResponse, GetApiGetUserArg>({
      query: (user: string) => `/user/${user}`,
    }),
  }),
});
