import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../../app/store";
import type { User, LoginCredentials, RegisterData } from "../../utils/types";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<
      { success: boolean; message: string; data: { user: User; token: string } },
      LoginCredentials
    >({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),

    register: builder.mutation<
      { success: boolean; message: string; data: { user: User; token: string } },
      RegisterData
    >({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: {
          ...data,
          role: data.role.toUpperCase(), // IMPORTANT FIX
        },
      }),
    }),

    getMe: builder.query<User, void>({
      query: () => "/auth/me",
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetMeQuery,
} = authApi;