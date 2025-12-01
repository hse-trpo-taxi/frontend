import { baseApi } from "../../../app/api/base-api"
import type { IStatisticDriver, IStatisticDriverScore, IStatisticOrder } from "../model/statistic-type"

export const statisticApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getStatisticOrder: builder.query<IStatisticOrder, any>({
            query: () => {
                return {
                    url: '/api/order/weekStat',
                    method: 'GET'
                }
            }
        }),
        getStatisticDriver: builder.query<IStatisticDriver, any>({
            query: () => {
                return {
                    url: '/api/order/currentStat',
                    method: 'GET'
                }
            }
        }),
        getStatisticDriverScore: builder.query<IStatisticDriverScore, any>({
            query: () => {
                return {
                    url: '/api/drivers/meanScore',
                    method: 'GET'
                }
            }
        })
    })
})

export const { useGetStatisticOrderQuery, useGetStatisticDriverQuery, useGetStatisticDriverScoreQuery } = statisticApi;