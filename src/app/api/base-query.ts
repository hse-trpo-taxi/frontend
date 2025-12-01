import { fetchBaseQuery, type BaseQueryFn, type FetchArgs, type FetchBaseQueryError, type FetchBaseQueryMeta } from '@reduxjs/toolkit/query';
import { BASE_URL } from './base-url';

export const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, NonNullable<unknown>, FetchBaseQueryMeta> = fetchBaseQuery({
    baseUrl: BASE_URL,
});