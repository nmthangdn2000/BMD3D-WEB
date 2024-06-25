import { QueryObserverOptions, useQuery } from '@tanstack/react-query';
import { API_NAME } from '../..';
import {
  ApiGetBlogsRequest,
  ApiGetBlogsResponse,
  getBlogs,
} from '../../endpoints/blog';
import { baseUseQueryOptions } from '@lib/api/base';

export const useApiGetBlogs = (
  params: ApiGetBlogsRequest,
  options?: QueryObserverOptions<ApiGetBlogsResponse, any>,
) => {
  return useQuery<ApiGetBlogsResponse, any>({
    queryKey: [API_NAME, 'get-blogs', params],
    queryFn: async () => getBlogs(params),
    ...baseUseQueryOptions,
    ...options,
  });
};
