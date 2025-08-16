'use client';
import RainbowkitConfig from './rainbowkit.config';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

export default function RainbowkitProviders({
  children,
}: {
  children: ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <WagmiProvider config={RainbowkitConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
