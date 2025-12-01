import { baseApi } from "../../../app/api/base-api"
import type { ISupport } from "../model/support-type"

export const supportApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSupport: builder.query<ISupport[], any>({
            query: () => {
                return {
                    url: '/api/support/requests',
                    method: 'GET'
                }
            }
        })
    })
})

export const { useGetSupportQuery } = supportApi