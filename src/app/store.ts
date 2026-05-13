import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { authApi } from "../features/api/authApi";
import { usersApi } from "../features/api/usersApi";
import { driversApi } from "../features/api/driversApi";
import { trucksApi } from "../features/api/trucksApi";
import { loadsApi } from "../features/api/loadsApi";
import { dispatchApi } from "../features/api/dispatchApi";
import { trackingApi } from "../features/api/trackingApi";
import { podApi } from "../features/api/podApi";
import { paymentsApi } from "../features/api/paymentsApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [driversApi.reducerPath]: driversApi.reducer,
    [trucksApi.reducerPath]: trucksApi.reducer,
    [loadsApi.reducerPath]: loadsApi.reducer,
    [dispatchApi.reducerPath]: dispatchApi.reducer,
    [trackingApi.reducerPath]: trackingApi.reducer,
    [podApi.reducerPath]: podApi.reducer,
    [paymentsApi.reducerPath]: paymentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      usersApi.middleware,
      driversApi.middleware,
      trucksApi.middleware,
      loadsApi.middleware,
      dispatchApi.middleware,
      trackingApi.middleware,
      podApi.middleware,
      paymentsApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;