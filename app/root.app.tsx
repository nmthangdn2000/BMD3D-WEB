'use client';

import { Providers } from '@app/providers';
import { queryClient } from '@lib/api/app-query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from '@lib/store';

export const AppRoot = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Providers>{children}</Providers>

        {/* React Query Devtools */}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  );
};
