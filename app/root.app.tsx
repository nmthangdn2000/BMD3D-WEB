'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from '@lib/store';
import { queryClient } from '@lib/api/app-query-client';

export const AppRoot = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {children}

        {/* React Query Devtools */}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  );
};
