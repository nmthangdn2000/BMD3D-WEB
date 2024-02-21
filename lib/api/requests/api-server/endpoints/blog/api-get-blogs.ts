import { cache } from 'react';
import { ROOT_ENDPOINT } from '../../constants';
import { IBlog } from '../../models/blog';
import { IPaginationOptions } from '../interfaces/pagination.interface';
import { IResponsePagination } from '../interfaces/response.interface';
import { request } from '../..';
import { joinPaths } from '@lib/utilities';

export type ApiGetBlogsRequest = IPaginationOptions & {
  title?: string;
  type?: IBlog['type'];
  sortBy?: 'newest' | 'views';
};

export type ApiGetBlogsResponse = IResponsePagination<IBlog>;

export const getBlogs = async (params: ApiGetBlogsRequest) =>
  request.get<ApiGetBlogsRequest, ApiGetBlogsResponse>(
    joinPaths([ROOT_ENDPOINT, 'blog']),
    { params },
  );

export const preloadBlogs = cache(getBlogs);
