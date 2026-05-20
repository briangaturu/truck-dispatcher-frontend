import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../../app/store";
import type { Load } from "../../utils/types";

export const loadsApi = createApi({
  reducerPath: "loadsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["Loads"],
  endpoints: (builder) => ({
    getLoads: builder.query<Load[], void>({
      query: () => "/loads",
      providesTags: ["Loads"],
    }),
    getLoadById: builder.query<Load, string>({
      query: (id) => `/loads/${id}`,
    }),
    createLoad: builder.mutation<Load, Partial<Load>>({
      query: (body) => ({ url: "/loads", method: "POST", body }),
      invalidatesTags: ["Loads"],
    }),
    updateLoad: builder.mutation<Load, Partial<Load> & { id: string }>({
      query: ({ id, ...body }) => ({ url: `/loads/${id}`, method: "PUT", body }),
      invalidatesTags: ["Loads"],
    }),
    deleteLoad: builder.mutation<void, string>({
      query: (id) => ({ url: `/loads/${id}`, method: "DELETE" }),
      invalidatesTags: ["Loads"],
    }),
  }),
});

export const {
  useGetLoadsQuery,
  useGetLoadByIdQuery,
  useCreateLoadMutation,
  useUpdateLoadMutation,
  useDeleteLoadMutation,
} = loadsApi;