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

// ✅ Replace with your Reown Cloud Project ID
export const projectId ="0b7fe32586f2c6361bf93763d3c8bfb2"

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [
  mainnet, arbitrum, scroll, morph, berachainTestnetbArtio, mantle, soneium,
  zircuit, rootstock, abstract, abstractTestnet, viction, monadTestnet, celo,
  apeChain, base, hedera, optimism, plasma
]

// ✅ Setup the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: false,
  networks,
  projectId
})

export const config = wagmiAdapter.wagmiConfig
