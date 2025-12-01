import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../api/base-api";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['api/executeQuery/fulfilled', 'api/executeQuery/rejected'],
            ignoredPaths: ['api.queries', 'payload.data']
        }
    }).concat(baseApi.middleware),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;