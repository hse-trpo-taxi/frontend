import { baseApi } from "../../../app/api/base-api";
import type { IOrderTable } from "../model/order-type";

export const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getOrders: builder.query<IOrderTable[], any>({
            query: (body) => {
                return {
                    url: '/api/orders/list',
                    method: 'POST',
                    body
                }
            }
        })
    })
})

export const { useGetOrdersQuery } = orderApi