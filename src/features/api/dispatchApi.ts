import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../../app/store";
import type { Dispatch } from "../../utils/types";

export const dispatchApi = createApi({
  reducerPath: "dispatchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["Dispatch"],
  endpoints: (builder) => ({
    getDispatches: builder.query<Dispatch[], void>({
      query: () => "/dispatch",
      providesTags: ["Dispatch"],
    }),
    createDispatch: builder.mutation<Dispatch, Partial<Dispatch>>({
      query: (body) => ({ url: "/dispatch", method: "POST", body }),
      invalidatesTags: ["Dispatch"],
    }),
    updateDispatch: builder.mutation<Dispatch, Partial<Dispatch> & { id: string }>({
      query: ({ id, ...body }) => ({ url: `/dispatch/${id}`, method: "PUT", body }),
      invalidatesTags: ["Dispatch"],
    }),
  }),
});

export const {
  useGetDispatchesQuery,
  useCreateDispatchMutation,
  useUpdateDispatchMutation,
} = dispatchApi;