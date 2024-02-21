import { baseUseQueryOptions } from '@lib/api/base';
import { QueryObserverOptions, useQuery } from '@tanstack/react-query';
import { API_NAME } from '../..';
import {
  ApiGetBlogBySlugRequest,
  ApiGetBlogBySlugResponse,
  getBlogBySlug,
} from '../../endpoints/blog';

export const useApiGetBlogBySlug = (
  params: ApiGetBlogBySlugRequest,
  options?: QueryObserverOptions<ApiGetBlogBySlugResponse, any>,
) => {
  return useQuery<ApiGetBlogBySlugResponse, any>({
    queryKey: [API_NAME, 'get-blog-by-slug', params],
    queryFn: async () => getBlogBySlug(params),
    ...baseUseQueryOptions,
    ...options,
  });
};
``;
