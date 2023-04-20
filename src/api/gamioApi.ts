import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.NEXT_PUBLIC_GAMIO_API_URL;
const accessToken = process.env.NEXT_PUBLIC_GAMIO_ACCESS_TOKEN;

export const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  prepareHeaders: (headers) => {
    headers.set('xc-token', accessToken);
    return headers;
  },
});

type GetApiGetUserResponse = {
  Id: number;
  Name: string;
  level: string;
  Username: string;
  AvatarUrl: string;
  CreatedAt: string;
  UpdatedAt: string;
};
type GetApiGetUserArg = string;

export type InventoryItem = {
  Id: number;
  title: string;
  used: boolean;
  type: 'code' | 'hardware' | null;
  code: string;
  claimed: boolean;
  shipped: boolean;
  shipping_date: string;
  image_url: string;
  CreatedAt: string;
  UpdatedAt: string;
};
type GetApiGetInventoryResponse = {
  list: InventoryItem[];
};
type GetApiGetInventoryArg = {
  limit?: number;
  offset?: number;
  shuffle?: boolean;
};

export const gamioApi = createApi({
  reducerPath: 'gamioApi',
  baseQuery,
  endpoints: (build) => ({
    getUser: build.query<GetApiGetUserResponse, GetApiGetUserArg>({
      query: (user: string) => `/User/${user}`,
    }),
    getInventory: build.query<
      GetApiGetInventoryResponse,
      GetApiGetInventoryArg
    >({
      query: (args) => ({
        url: '/Inventory',
        params: args,
      }),
    }),
  }),
});

export const { useGetUserQuery, useGetInventoryQuery } = gamioApi;
