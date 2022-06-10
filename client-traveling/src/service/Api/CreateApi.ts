import {  createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import httpCommon from '../http-common'
// Define a service using a base URL and expected endpoints
export enum TypeApiAction{
    getAll = 'GetAll',
    create = 'create',
    getById = 'getById',
    delete = 'delete'
}
export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: httpCommon.getUri() }),
    reducerPath: 'api',
    endpoints: (builder) => ({
    }),
})

export const apiCrudInject = <T>(name: string, tag: string) =>{
    const ingGetAll = injectGetAll<T>(name, tag);
    const injCreate = injectCreate<T>(name, tag);
    const injGetByID = injectGetByID<T>(name,tag);
    const injDelete = injectDelete<T>(name, tag);
    return {"useGetAll" : ingGetAll,"useCreate": injCreate, "useGetById": injGetByID, "useDelete" : injDelete}
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

export const injectDelete = <T>(name: string, tag: string) => {
  const enhancedApi = api.enhanceEndpoints({ addTagTypes: [tag] });
  const entityApi = enhancedApi.injectEndpoints({
    endpoints: (build) => ({
      [TypeApiAction.delete + name]: build.mutation<T, string>({
        query: (id: string) => ({ url: name+`/${TypeApiAction.delete}/${id}`, method: 'DELETE'}),
        invalidatesTags: (result, error) => [{ type: tag}],
      }),
    }),
  });
  return entityApi.endpoints[TypeApiAction.delete + name];
};
