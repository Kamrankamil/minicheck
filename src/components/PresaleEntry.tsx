import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useAccount } from 'wagmi'
import buycexlogo from '../assets/img/BUYCEX-INFINITY.png'

// ✅ Detect Telegram
const isTelegram =
  typeof window !== 'undefined' && !!(window as any).Telegram?.WebApp

const PresaleEntry: React.FC = () => {
  const { isConnected, address } = useAccount()

  // Warn if AppKit button isn’t registered
  useEffect(() => {
    const registered = customElements.get('appkit-button')
    if (!registered) {
      console.warn('⚠️ appkit-button not registered. Check AppKitProvider setup!')
    }
  }, [])

  // Optional: Redirect Telegram users out of WebView
  useEffect(() => {
    if (isTelegram) {
      // Option 1: Auto open in default browser
      const currentUrl = window.location.href
      const openUrl = `https://openinbrowser.app/?redirect=${encodeURIComponent(currentUrl)}`
      const timer = setTimeout(() => {
        window.location.href = openUrl
      }, 2500)
      return () => clearTimeout(timer)
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

        {/* Wallet Connect Button (AppKit) */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex justify-center">
            <appkit-button />
          </div>

          {isConnected && (
            <div className="flex justify-center">
              <appkit-network-button />
            </div>
          )}

          <NavLink
            to="/home"
            className="mt-4 px-6 py-2 border border-yellow-400 text-yellow-400 rounded font-semibold hover:bg-yellow-400 hover:text-black transition"
          >
            Go Home
          </NavLink>
        </div>

        {/* Telegram warning */}
        {isTelegram && (
          <div className="mt-6 text-sm text-red-400">
            ⚠️ You’re inside Telegram, wallet links may not work here.
            <br />
            Tap <strong>⋮ → Open in Browser</strong> or <strong>Share → Open in Chrome</strong> to continue.
          </div>
        )}
      </div>
    </div>
  )
}

export default PresaleEntry
