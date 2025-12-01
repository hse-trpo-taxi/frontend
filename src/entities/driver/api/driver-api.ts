import { baseApi } from "../../../app/api/base-api";
import type { IDriverQuery } from "../model/driver-type";

export const driverApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDriversTable: builder.query<IDriverQuery[], any>({
            query: (body) => {
                return {
                    url: ' /api/drivers/stat',
                    method: 'POST',
                    body
                }
            }
        })
    })
})

export const { useGetDriversTableQuery } = driverApi