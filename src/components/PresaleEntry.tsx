import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAccount } from 'wagmi'
import buycexlogo from '../assets/img/BUYCEX-INFINITY.png'

// ✅ Detect Telegram
const isTelegram =
  typeof window !== 'undefined' && !!(window as any).Telegram?.WebApp

const PresaleEntry: React.FC = () => {
  const { isConnected, address, isConnecting } = useAccount()
  const [showInstructions, setShowInstructions] = useState(false)

  // Warn if AppKit button isn't registered
  useEffect(() => {
    const registered = customElements.get('appkit-button')
    if (!registered) {
      console.warn('⚠️ appkit-button not registered. Check AppKitProvider setup!')
    }
  }, [])

  // ✅ Show Telegram info and handle connection state
  useEffect(() => {
    if (isTelegram) {
      console.log('📱 Running inside Telegram WebView')
      console.log('✅ Wallet redirect helper is active')
    }
  }, [])

  // ✅ Show instructions when connecting
  useEffect(() => {
    if (isConnecting && isTelegram) {
      setShowInstructions(true)
    } else {
      setShowInstructions(false)
    }
  }, [isConnecting, isTelegram])

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
            : isConnecting
            ? '⏳ Connecting to wallet...'
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

        {/* Telegram info - default state */}
        {isTelegram && !isConnecting && !isConnected && (
          <div className="mt-6 p-3 bg-blue-500/10 border border-blue-500/30 rounded text-sm text-blue-300">
            📱 <strong>Telegram detected!</strong>
            <br />
            Click "Connect Wallet" above - it will open MetaMask/Trust automatically.
          </div>
        )}

        {/* Instructions when connecting */}
        {showInstructions && (
          <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded text-sm text-yellow-300 animate-pulse">
            <p className="font-bold mb-2">⚠️ Important Steps:</p>
            <ol className="text-left space-y-2">
              <li>1️⃣ MetaMask should have opened automatically</li>
              <li>2️⃣ Switch to MetaMask app</li>
              <li>3️⃣ Approve the connection request</li>
              <li>4️⃣ Come back to Telegram to continue</li>
            </ol>
            <div className="mt-3 text-xs text-yellow-400">
              💡 If MetaMask didn't open, click "Connect Wallet" again
            </div>
          </div>
        )}

        {/* Success message */}
        {isConnected && isTelegram && (
          <div className="mt-6 p-3 bg-green-500/10 border border-green-500/30 rounded text-sm text-green-300">
            ✅ <strong>Wallet connected successfully!</strong>
            <br />
            You can now proceed to the presale.
          </div>
        )}
      </div>
    </div>
  )
}

export default PresaleEntry