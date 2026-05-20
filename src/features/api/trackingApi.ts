import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../../app/store";
import type { TrackingEvent } from "../../utils/types";

export const trackingApi = createApi({
  reducerPath: "trackingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["Tracking"],
  endpoints: (builder) => ({
    getTrackingByLoad: builder.query<TrackingEvent[], string>({
      query: (loadId) => `/tracking/${loadId}`,
      providesTags: ["Tracking"],
    }),
    addTrackingEvent: builder.mutation<TrackingEvent, Partial<TrackingEvent>>({
      query: (body) => ({ url: "/tracking", method: "POST", body }),
      invalidatesTags: ["Tracking"],
    }),
  }),
});

export const { useGetTrackingByLoadQuery, useAddTrackingEventMutation } =
  trackingApi;