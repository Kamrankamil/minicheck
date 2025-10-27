import { cookieStorage, createStorage } from '@wagmi/core'
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
  plasma,
  bsc,
  bscTestnet
} from '@reown/appkit/networks'

// ✅ Reown Cloud Project ID
export const projectId = "0b7fe32586f2c6361bf93763d3c8bfb2"

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [
  mainnet, bsc, bscTestnet, arbitrum, scroll, morph, berachainTestnetbArtio, 
  mantle, soneium, zircuit, rootstock, abstract, abstractTestnet, viction, 
  monadTestnet, celo, apeChain, base, hedera, optimism, plasma
]

// ✅ Wagmi Adapter Setup
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({ storage: cookieStorage }),
  ssr: false,
  networks,
  projectId,
  transports: {}
})

// ✅ WalletConnect / AppKit config with mobile support
export const walletConnectProjectId = '0b7fe32586f2c6361bf93763d3c8bfb2'

export const appKitConfig = {
  walletConnect: {
    projectId: walletConnectProjectId,
    metadata: {
      name: 'BCX Presale',
      description: 'Buycex token presale',
      url: 'https://minicheck.vercel.app',
      icons: ['https://minicheck.vercel.app/logo.png'],
    },
    // ✅ Enable universal links for mobile wallets
    explorerRecommendedWalletIds: [
      'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96', // MetaMask
      '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0', // Trust Wallet
    ],
    mobileLinks: [
      'metamask',
      'trust',
      'rainbow',
      'zerion',
    ],
    desktopLinks: [
      'metamask',
      'trust',
    ],
    enableUniversalLinks: true,
  },
}

// ✅ Export wagmi config
export const config = wagmiAdapter.wagmiConfig