import { createTRPCReact, httpBatchLink } from '@trpc/react-query';
import type { TrpcRouter } from '@first_trpc/api/src/trpc.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

const trpc = createTRPCReact<TrpcRouter>();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: `http://localhost:3000/trpc`,
    }),
  ],
});

export const TrpcProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};
