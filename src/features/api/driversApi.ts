import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../../app/store";
import type { Driver } from "../../utils/types";

export const driversApi = createApi({
  reducerPath: "driversApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["Drivers"],
  endpoints: (builder) => ({
    getDrivers: builder.query<Driver[], void>({
      query: () => "/drivers",
      providesTags: ["Drivers"],
    }),
    getDriverById: builder.query<Driver, string>({
      query: (id) => `/drivers/${id}`,
    }),
    createDriver: builder.mutation<Driver, Partial<Driver>>({
      query: (body) => ({ url: "/drivers", method: "POST", body }),
      invalidatesTags: ["Drivers"],
    }),
    updateDriver: builder.mutation<Driver, Partial<Driver> & { id: string }>({
      query: ({ id, ...body }) => ({
        url: `/drivers/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Drivers"],
    }),
    deleteDriver: builder.mutation<void, string>({
      query: (id) => ({ url: `/drivers/${id}`, method: "DELETE" }),
      invalidatesTags: ["Drivers"],
    }),
  }),
});

export const {
  useGetDriversQuery,
  useGetDriverByIdQuery,
  useCreateDriverMutation,
  useUpdateDriverMutation,
  useDeleteDriverMutation,
} = driversApi;