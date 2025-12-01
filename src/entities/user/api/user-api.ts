import { baseApi } from "../../../app/api/base-api";
import type { IUserType } from "../model/user-type";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query<IUserType, any>({
            query: () => {
                return {
                    url: '/api/user/current',
                    method: 'GET'
                }
            }
        })
    })
})

export const { useGetUserQuery } = userApi;