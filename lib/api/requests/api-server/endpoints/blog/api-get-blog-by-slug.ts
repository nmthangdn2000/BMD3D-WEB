import { cache } from 'react';
import { ROOT_ENDPOINT } from '../../constants';
import { IBlog } from '../../models/blog';
import { request } from '../..';
import { generatePath, joinPaths } from '@lib/utilities';

export type ApiGetBlogBySlugRequest = {
  slug: string;
};

export type ApiGetBlogBySlugResponse = IBlog;

export const getBlogBySlug = async (params: ApiGetBlogBySlugRequest) =>
  request.get<ApiGetBlogBySlugRequest, ApiGetBlogBySlugResponse>(
    generatePath(joinPaths([ROOT_ENDPOINT, 'blog/:slug']), params),
  );

export const preloadBlogBySlug = cache(getBlogBySlug);
