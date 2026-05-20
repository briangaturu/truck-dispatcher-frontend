import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../../app/store";
import type {
  User,
  LoginCredentials,
  RegisterData,
} from "../../utils/types";

const BASE_URL ='/api';

export const authApi = createApi({
  reducerPath: "authApi",

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,

    prepareHeaders: (
      headers,
      { getState }
    ) => {
      const token = (
        getState() as RootState
      ).auth.token;

      if (token) {
        headers.set(
          "authorization",
          `Bearer ${token}`
        );
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    /* =========================
       LOGIN
    ========================= */
    login: builder.mutation<
      {
        success: boolean;
        message: string;
        data: {
          user: any;
          token: string;
          refreshToken: string;
        };
      },
      LoginCredentials
    >({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),

    /* =========================
       REGISTER
    ========================= */
    register: builder.mutation<
      {
        success: boolean;
        message: string;
        data?: any;
      },
      RegisterData
    >({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),

    /* =========================
       VERIFY EMAIL CODE
    ========================= */
    verifyCode: builder.mutation<
      {
        success: boolean;
        message: string;
      },
      {
        email: string;
        code: string;
      }
    >({
      query: (data) => ({
        url: "/auth/verify-code",
        method: "POST",
        body: data,
      }),
    }),

    /* =========================
       REFRESH TOKEN
    ========================= */
    refreshToken: builder.mutation<
      {
        success: boolean;
        message: string;
        data: {
          token: string;
        };
      },
      {
        refreshToken: string;
      }
    >({
      query: (data) => ({
        url: "/auth/refresh-token",
        method: "POST",
        body: data,
      }),
    }),

    /* =========================
       GET CURRENT USER
    ========================= */
    getMe: builder.query<
      User,
      number
    >({
      query: (id) => `/auth/me/${id}`,
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useVerifyCodeMutation,
  useRefreshTokenMutation,
  useGetMeQuery,
} = authApi;