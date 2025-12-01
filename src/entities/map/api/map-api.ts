import { baseApi } from "../../../app/api/base-api";
import type { IDriversCoord } from "../model/map-type";

export const mapApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDriversCoord: builder.query<IDriversCoord[], any>({
            query: () => {
                return {
                    url: '/api/drivers/coords',
                    method: 'GET'
                }
            }
        })
    })
})

export const { useGetDriversCoordQuery } = mapApi