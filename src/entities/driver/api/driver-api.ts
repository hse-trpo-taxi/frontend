import { baseApi } from "../../../app/api/base-api";
import type { IDriverMap, IDriverSingle, IDriverTable, ITimeTable } from "../model/driver-type";

export const driverApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDriversTableAll: builder.query<IDriverTable[], any>({
            query: () => {
                return {
                    url: '/api/drivers',
                    method: 'GET',
                }
            }
        }),
        getDriversTablePag: builder.query<IDriverTable[], any>({
            query: (body) => {
                return {
                    url: '/api/drivers/stat',
                    method: 'POST',
                    body
                }
            }
        }),
        getSingleDriver: builder.query<IDriverSingle, any>({
            query: (id) => {
                return {
                    url: `/api/drivers/${id}`,
                    method: 'GET'
                }
            }
        }),
        getDriverOrders: builder.query<any, any>({
            query: ({ id, body }) => {
                return {
                    url: `api/drivers/${id}/orders`,
                    method: 'POST',
                    body
                }
            }
        }),
        getDriverMap: builder.query<IDriverMap, any>({
            query: (id) => {
                return {
                    url: `/api/drivers/${id}/order/current`,
                    method: 'GET'
                }
            }
        }),
        getDriverShedule: builder.query<ITimeTable[], any>({
            query: (id) => {
                return {
                    url: `/api/drivers/${id}/schedule`,
                    method: 'POST',
                    body: { start: "0001-01-01T00:00:00Z", end: "0001-01-01T00:00:00Z" }
                }
            }
        })
    })
})

export const {
    useGetDriversTableAllQuery,
    useLazyGetDriversTablePagQuery,
    useGetSingleDriverQuery,
    useGetDriverOrdersQuery,
    useGetDriverMapQuery,
    useGetDriverSheduleQuery
} = driverApi