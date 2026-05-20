import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../../app/store";
import type { Payment } from "../../utils/types";

export const paymentsApi = createApi({
  reducerPath: "paymentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["Payments"],
  endpoints: (builder) => ({
    getPayments: builder.query<Payment[], void>({
      query: () => "/payments",
      providesTags: ["Payments"],
    }),
    getPaymentById: builder.query<Payment, string>({
      query: (id) => `/payments/${id}`,
    }),
    createPayment: builder.mutation<Payment, Partial<Payment>>({
      query: (body) => ({ url: "/payments", method: "POST", body }),
      invalidatesTags: ["Payments"],
    }),
    updatePayment: builder.mutation<Payment, Partial<Payment> & { id: string }>({
      query: ({ id, ...body }) => ({
        url: `/payments/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Payments"],
    }),
  }),
});

export const {
  useGetPaymentsQuery,
  useGetPaymentByIdQuery,
  useCreatePaymentMutation,
  useUpdatePaymentMutation,
} = paymentsApi;