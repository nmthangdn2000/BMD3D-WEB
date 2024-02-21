import { UseQueryOptions } from '@tanstack/react-query';

export const baseUseQueryOptions: Partial<UseQueryOptions<any, any>> = {
  retry(failureCount, error) {
    if (failureCount < 3) return true;
    else return false;
  },
};
