import { createSlice } from "@reduxjs/toolkit";

import type {
  PayloadAction,
} from "@reduxjs/toolkit";

import type {
  AuthState,
  User,
} from "../../utils/types";

/* =========================================
   SESSION STORAGE
========================================= */

const storedUser =
  sessionStorage.getItem("td_user");

const storedToken =
  sessionStorage.getItem("td_token");

const storedRefreshToken =
  sessionStorage.getItem(
    "td_refresh_token"
  );

/* =========================================
   INITIAL STATE
========================================= */

const initialState: AuthState = {
  user: storedUser
    ? JSON.parse(storedUser)
    : null,

  token: storedToken || null,

  refreshToken:
    storedRefreshToken || null,

  isAuthenticated:
    !!storedToken,

  loading: false,

  error: null,
};

/* =========================================
   SLICE
========================================= */

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    /* =====================================
       SET CREDENTIALS
    ===================================== */

    setCredentials: (
      state,
      action: PayloadAction<{
        user: User;
        token: string;
        refreshToken: string;
      }>
    ) => {
      state.user =
        action.payload.user;

      state.token =
        action.payload.token;

      state.refreshToken =
        action.payload.refreshToken;

      state.isAuthenticated = true;

      state.error = null;

      // Save only for browser session
      sessionStorage.setItem(
        "td_user",
        JSON.stringify(
          action.payload.user
        )
      );

      sessionStorage.setItem(
        "td_token",
        action.payload.token
      );

      sessionStorage.setItem(
        "td_refresh_token",
        action.payload.refreshToken
      );
    },

    /* =====================================
       LOGOUT
    ===================================== */

    logout: (state) => {
      state.user = null;

      state.token = null;

      state.refreshToken = null;

      state.isAuthenticated =
        false;

      state.loading = false;

      state.error = null;

      sessionStorage.removeItem(
        "td_user"
      );

      sessionStorage.removeItem(
        "td_token"
      );

      sessionStorage.removeItem(
        "td_refresh_token"
      );
    },

    /* =====================================
       LOADING
    ===================================== */

    setLoading: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.loading =
        action.payload;
    },

    /* =====================================
       ERROR
    ===================================== */

    setError: (
      state,
      action: PayloadAction<
        string | null
      >
    ) => {
      state.error =
        action.payload;
    },
  },
});

export const {
  setCredentials,
  logout,
  setLoading,
  setError,
} = authSlice.actions;

export default authSlice.reducer;