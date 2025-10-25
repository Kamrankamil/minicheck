import React from 'react'
import { createAppKit } from '@reown/appkit/react'
import { mainnet, bsc, bscTestnet, type AppKitNetwork } from '@reown/appkit/networks'
import { wagmiAdapter, projectId } from './config'
import { WagmiProvider, type Config } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

// ✅ Define supported networks
const networks: [AppKitNetwork, ...AppKitNetwork[]] = [mainnet, bsc, bscTestnet]

// ✅ Metadata
const metadata = {
  name: "Buycex Presale App",
  description: "Powered by Reown AppKit",
  url: "https://minicheck.vercel.app/presale",
  icons: ["https://avatars.githubusercontent.com/u/179229932"]
}

// ✅ Telegram detection
const isTelegram =
  typeof window !== 'undefined' && !!(window as any).Telegram?.WebApp

// ✅ Initialize AppKit modal
createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks,
  metadata,
  defaultNetwork: bsc,
  themeMode: 'light',
  themeVariables: {
    '--w3m-accent': '#f5c400',
  },
  features: {
    analytics: true,
    email: true,
    socials: ['google', 'x', 'github', 'discord', 'apple', 'facebook', 'farcaster'],
    emailShowWallets: true,
    collapseWallets: true,
  },
})

// ✅ Handle Telegram environment (optional)
if (isTelegram) {
  console.warn('⚠️ Running inside Telegram WebView. Wallets may not open natively.')
}

// ✅ Export AppKitProvider
export const AppKitProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

export default AppKitProvider
