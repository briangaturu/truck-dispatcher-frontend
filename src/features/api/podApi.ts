import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../../app/store";
import type { POD } from "../../utils/types";

export const podApi = createApi({
  reducerPath: "podApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["POD"],
  endpoints: (builder) => ({
    getPODs: builder.query<POD[], void>({
      query: () => "/pod",
      providesTags: ["POD"],
    }),
    getPODByLoad: builder.query<POD, string>({
      query: (loadId) => `/pod/load/${loadId}`,
    }),
    uploadPOD: builder.mutation<POD, FormData>({
      query: (formData) => ({
        url: "/pod",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["POD"],
    }),
  }),
});

export const { useGetPODsQuery, useGetPODByLoadQuery, useUploadPODMutation } =
  podApi;