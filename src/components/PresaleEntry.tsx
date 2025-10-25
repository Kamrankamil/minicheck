import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useAccount } from 'wagmi'
import buycexlogo from '../assets/img/BUYCEX-INFINITY.png'

const PresaleEntry: React.FC = () => {
  const { isConnected, address } = useAccount()

  // Detect Telegram WebView
  const isTelegram =
    typeof window !== 'undefined' && !!(window as any).Telegram?.WebApp

  // Debug wallet deep links being blocked in Telegram
  useEffect(() => {
    const interceptNavigation = (e: any) => {
      const url = e?.url || e?.target?.location?.href
      if (
        url &&
        (url.startsWith('wc:') ||
          url.startsWith('metamask:') ||
          url.startsWith('trust:'))
      ) {
        alert('🚨 Telegram blocked a wallet link:\n' + url)
        e.preventDefault?.()
      }
    }

    window.addEventListener('beforeunload', interceptNavigation)
    window.addEventListener('message', interceptNavigation)
    return () => {
      window.removeEventListener('beforeunload', interceptNavigation)
      window.removeEventListener('message', interceptNavigation)
    }
  }, [])

  // Debug check for missing AppKit registration
  useEffect(() => {
    const registered = customElements.get('appkit-button')
    if (!registered) {
      alert('⚠️ appkit-button not registered. Check AppKitProvider setup!')
    }
  }, [])

  return (
    <div className="flex h-screen items-center justify-center bg-black text-white">
      <div className="w-[90%] max-w-md rounded-lg border border-white/10 bg-black/40 p-8 text-center backdrop-blur-lg shadow-lg">
        {/* Logo */}
        <img
          src={buycexlogo}
          alt="Buycex Logo"
          className="mx-auto mb-6 h-14 w-auto"
        />

        {/* Title */}
        <h1 className="mb-2 text-4xl font-bold text-yellow-400">
          Enter The Buycex Presale
        </h1>

        {/* Description */}
        <p className="mb-6 text-lg text-white/80">
          {isConnected
            ? `✅ Wallet connected: ${address?.slice(0, 6)}...${address?.slice(-4)}`
            : 'To join the presale, connect your wallet first!'}
        </p>

        <hr className="border-t border-white/10 my-4" />

        {/* Wallet Connect Button (from AppKit) */}
        <div className="flex flex-col items-center gap-4">
          {/* ✅ Reown’s connect button */}
          <div className="flex justify-center">
            <appkit-button />
          </div>

          {/* Show network selector only when connected */}
          {isConnected && (
            <div className="flex justify-center">
              <appkit-network-button />
            </div>
          )}

          {/* Go Home button */}
          <NavLink
            to="/home"
            className="mt-4 px-6 py-2 border border-yellow-400 text-yellow-400 rounded font-semibold hover:bg-yellow-400 hover:text-black transition"
          >
            Go Home
          </NavLink>
        </div>

        {/* Telegram Warning */}
        {isTelegram && (
          <div className="mt-6 text-sm text-red-400">
            ⚠️ You’re inside Telegram. Wallets may fail to open here.
            <br />
            Please tap <strong>⋮ → Open in Browser</strong> and reconnect.
          </div>
        )}
      </div>
    </div>
  )
}

export default PresaleEntry
