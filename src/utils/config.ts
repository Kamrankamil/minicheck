// src/utils/config.ts
import { cookieStorage, createStorage, http } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import {
  mainnet,
  arbitrum,
  scroll,
  morph,
  berachainTestnetbArtio,
  mantle,
  soneium,
  zircuit,
  rootstock,
  abstract,
  abstractTestnet,
  viction,
  monadTestnet,
  celo,
  apeChain,
  base,
  hedera,
  optimism,
  plasma
} from '@reown/appkit/networks'

// ✅ Reown Cloud Project ID
export const projectId = "0b7fe32586f2c6361bf93763d3c8bfb2"

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [
  mainnet, arbitrum, scroll, morph, berachainTestnetbArtio, mantle, soneium,
  zircuit, rootstock, abstract, abstractTestnet, viction, monadTestnet, celo,
  apeChain, base, hedera, optimism, plasma
]

// ✅ Wagmi Adapter Setup
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({ storage: cookieStorage }),
  ssr: false,
  networks,
  projectId
})

// ✅ WalletConnect / AppKit config
export const walletConnectProjectId = '0b7fe32586f2c6361bf93763d3c8bfb2' // Replace with your WalletConnect project ID

export const appKitConfig = {
  walletConnect: {
    projectId: walletConnectProjectId,
    metadata: {
      name: 'BCX Presale',
      description: 'Buycex token presale',
      url: 'https://minicheck.vercel.app',
      icons: ['https://minicheck.vercel.app/logo.png'],
    },
    explorerRecommendedWalletIds: ['io.metamask', 'com.trustwallet.app'],
    mobileLinks: ['metamask', 'trust'],
    desktopLinks: ['metamask', 'trust'],
    enableUniversalLinks: true,
  },
}

// ✅ Export wagmi config
export const config = wagmiAdapter.wagmiConfig
