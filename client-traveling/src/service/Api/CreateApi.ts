import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import httpCommon from '../http-common'

// Define a service using a base URL and expected endpoints
export const apiLocation = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: httpCommon.getUri() + '/Location' }),
    reducerPath: 'api',
    endpoints: (builder) => ({
        getAllLocation: builder.query<Location, void>({
            query: (name) => `/getAll`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllLocationQuery } = apiLocation