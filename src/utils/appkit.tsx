import React, { useEffect } from 'react'
import { createAppKit } from '@reown/appkit/react'
import { mainnet, bsc, bscTestnet, type AppKitNetwork } from '@reown/appkit/networks'
import { wagmiAdapter, projectId } from './config'
import { WagmiProvider, type Config } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { initTelegramWalletRedirect } from '../useTelegramWalletRedirect'
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

// ✅ WalletConnect configuration for universal links
const walletConnectConfig = {
  projectId,
  metadata,
  showQrModal: true,
  qrModalOptions: {
    themeMode: 'light' as const,
  },
}

// ✅ Telegram detection
const isTelegram =
  typeof window !== 'undefined' && !!(window as any).Telegram?.WebApp

// ✅ Initialize AppKit modal with WalletConnect config
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

// ✅ Initialize Telegram wallet redirect patch
if (typeof window !== 'undefined') {
  initTelegramWalletRedirect()
}

// ✅ Handle Telegram environment
if (isTelegram) {
  console.log('✅ Running inside Telegram WebView - wallet redirect enabled')
}

// ✅ Export AppKitProvider
export const AppKitProvider = ({ children }: { children: React.ReactNode }) => {
  // Ensure redirect is initialized when provider mounts
  useEffect(() => {
    initTelegramWalletRedirect()
  }, [])

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

export default AppKitProvider