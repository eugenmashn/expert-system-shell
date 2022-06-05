import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiLocation } from '../service/Api/CreateApi'


export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [apiLocation.reducerPath]: apiLocation.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiLocation.middleware),
})

setupListeners(store.dispatch)