import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../../app/store";
import type { Truck } from "../../utils/types";

export const trucksApi = createApi({
  reducerPath: "trucksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["Trucks"],
  endpoints: (builder) => ({
    getTrucks: builder.query<Truck[], void>({
      query: () => "/trucks",
      providesTags: ["Trucks"],
    }),
    getTruckById: builder.query<Truck, string>({
      query: (id) => `/trucks/${id}`,
    }),
    createTruck: builder.mutation<Truck, Partial<Truck>>({
      query: (body) => ({ url: "/trucks", method: "POST", body }),
      invalidatesTags: ["Trucks"],
    }),
    updateTruck: builder.mutation<Truck, Partial<Truck> & { id: string }>({
      query: ({ id, ...body }) => ({ url: `/trucks/${id}`, method: "PUT", body }),
      invalidatesTags: ["Trucks"],
    }),
    deleteTruck: builder.mutation<void, string>({
      query: (id) => ({ url: `/trucks/${id}`, method: "DELETE" }),
      invalidatesTags: ["Trucks"],
    }),
  }),
});

export const {
  useGetTrucksQuery,
  useGetTruckByIdQuery,
  useCreateTruckMutation,
  useUpdateTruckMutation,
  useDeleteTruckMutation,
} = trucksApi;