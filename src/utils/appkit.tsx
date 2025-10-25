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

// ✅ Detect Telegram WebView
const isTelegram =
  typeof window !== 'undefined' && !!(window as any).Telegram?.WebApp

const queryClient = new QueryClient()

if (!projectId) {
  throw new Error('Project ID is not defined')
}

// Metadata (optional)
const metadata = {
  name: "Buycex Presale App",
  description: "Powered by Reown AppKit",
  url: "https://minicheck.vercel.app/presale",
  icons: ["https://avatars.githubusercontent.com/u/179229932"]
}

// ✅ Initialize Reown AppKit modal (no walletConnect property)
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
  themeMode: 'light',
  features: {
    analytics: true,
    email: true,
    socials: ['google', 'x', 'github', 'discord', 'apple', 'facebook', 'farcaster'],
    emailShowWallets: true,
    collapseWallets: true,
  },
})

// ✅ Optional: patch Telegram WebView to prefer browser wallet linking
if (isTelegram) {
  // Open links in external browser (for MetaMask / Trust etc.)
  (window as any).Telegram?.WebApp?.openLink('https://minicheck.vercel.app')
}

export const AppKitProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
