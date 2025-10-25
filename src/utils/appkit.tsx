// src/utils/appkit.tsx
import React from 'react'
import { wagmiAdapter, projectId } from './config'
import { createAppKit } from '@reown/appkit/react'
import {
  mainnet, arbitrum, scroll, morph, berachainTestnetbArtio, mantle,
  soneium, zircuit, rootstock, abstract, abstractTestnet, viction,
  monadTestnet, celo, apeChain, base, hedera, optimism, plasma
} from '@reown/appkit/networks'

import { WagmiProvider, type Config } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

if (!projectId) {
  throw new Error('Project ID is not defined')
}

// Metadata (optional)
const metadata = {
  name: "Buycex Presale App",
  description: "Powered by Reown AppKit",
  url: "https://minicheck.vercel.app/",
  icons: ["https://avatars.githubusercontent.com/u/179229932"]
}

// ✅ Initialize Reown AppKit modal
createAppKit({
  adapters: [wagmiAdapter],
  chainImages: {
    5000: '/mantle.png',
    534352: '/scroll.png',
    80084: '/berachain.png',
    2818: '/morph.png',
    1868: '/soneium.png',
    48900: '/zircuit.svg',
    11124: '/abstract.png',
    30: '/rootstock.png',
  },
  projectId,
  networks: [
    mainnet, arbitrum, scroll, morph, berachainTestnetbArtio, mantle, soneium,
    zircuit, rootstock, abstract, abstractTestnet, viction, monadTestnet,
    celo, apeChain, base, hedera, optimism, plasma
  ],
  defaultNetwork: mainnet,
  metadata,
  features: {
    analytics: true,
    email: true,
    socials: ['google', 'x', 'github', 'discord', 'apple', 'facebook', 'farcaster'],
    emailShowWallets: true,
    collapseWallets: true,
  },
  themeMode: 'light'
})

export const AppKitProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
