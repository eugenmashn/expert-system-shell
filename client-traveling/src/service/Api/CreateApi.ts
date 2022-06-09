import {  createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import httpCommon from '../http-common'
// Define a service using a base URL and expected endpoints
export enum TypeApiAction{
    getAll = 'GetAll',
    create = 'create',
    getById = 'getById'
}
export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: httpCommon.getUri() }),
    reducerPath: 'api',
    endpoints: (builder) => ({
    }),
})

export const apiCrudInject = <T>(name: string, tag: string) =>{
    const getAll = injectGetAll<T>(name, tag);
    const create = injectCreate<T>(name, tag);
    const getByID = injectGetByID<T>(name,tag);
    return {"useGetAll" : getAll,"useCreate": create, "useGetById": getByID}
}

export const injectGetAll = <T>(name: string, tag: string) => {
    const enhancedApi = api.enhanceEndpoints({ addTagTypes: [tag] });
    const entityApi = enhancedApi.injectEndpoints({
      endpoints: (build) => ({
        [TypeApiAction.getAll + name]: build.query<T, void>({
          query: () => ({ url: name+`/${TypeApiAction.getAll}`, method: 'GET'}),
          providesTags: (result, error) => [{ type: tag}],
        }),
      }),
    });
    return entityApi.endpoints[TypeApiAction.getAll + name];
};

export const injectGetByID = <T>(name: string, tag: string) => {
  const enhancedApi = api.enhanceEndpoints({ addTagTypes: [tag] });
  const entityApi = enhancedApi.injectEndpoints({
    endpoints: (build) => ({
      [TypeApiAction.getById + name]: build.query<T, string>({
        query: (id) => ({ url: name+`/${TypeApiAction.getById}/${id}`, method: 'GET'}),
        providesTags: (result, error) => [{ type: tag}],
      }),
    }),
  });
  return entityApi.endpoints[TypeApiAction.getById + name];
};


export const injectCreate = <T>(name: string, tag: string) => {
  const enhancedApi = api.enhanceEndpoints({ addTagTypes: [tag] });
  const entityApi = enhancedApi.injectEndpoints({
    endpoints: (build) => ({
      [TypeApiAction.create + name]: build.mutation<T, T>({
        query: (val: T) => ({ url: name+`/${TypeApiAction.create}`, method: 'POST', body: val}),
        invalidatesTags: (result, error) => [{ type: tag}],
      }),
    }),
  });
  return entityApi.endpoints[TypeApiAction.create + name];
};
