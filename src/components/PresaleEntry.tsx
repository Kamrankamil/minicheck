import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAccount } from 'wagmi'
import axios from 'axios'
import buycexlogo from '../assets/img/BUYCEX-INFINITY.png'

const BACKEND_URL = 'http://localhost:5000' // Change to your ngrok URL in production

// ✅ Detect Telegram
const isTelegram =
  typeof window !== 'undefined' && !!(window as any).Telegram?.WebApp

interface TelegramUser {
  id: number
  first_name: string
  last_name?: string
  username?: string
  photo_url?: string
  language_code?: string
}

const PresaleEntry: React.FC = () => {
  const { isConnected, address, isConnecting } = useAccount()
  const [showInstructions, setShowInstructions] = useState(false)
  const [telegramUser, setTelegramUser] = useState<TelegramUser | null>(null)
  const [isLoadingTelegram, setIsLoadingTelegram] = useState(false)
  const [telegramError, setTelegramError] = useState<string | null>(null)

  // Warn if AppKit button isn't registered
  useEffect(() => {
    const registered = customElements.get('appkit-button')
    if (!registered) {
      console.warn('⚠️ appkit-button not registered. Check AppKitProvider setup!')
    }
  }, [])

  // ✅ Auto-fetch Telegram user data when app opens
  useEffect(() => {
    if (isTelegram) {
      console.log('📱 Running inside Telegram WebView')
      
      const tg = (window as any).Telegram?.WebApp
      if (tg) {
        // Ensure WebApp is ready
        tg.ready()
        tg.expand()
        
        // Force refresh initData (important for mobile)
        setTimeout(() => {
          const user = tg.initDataUnsafe?.user
          let initData = tg.initData
          
          console.log('🔍 Raw initData:', initData)
          console.log('👤 Raw user object:', user)
          console.log('🌍 Platform:', tg.platform)
          console.log('📱 Version:', tg.version)
          
          // ✅ If initData is empty on mobile, try alternative approach
          if (!initData && user) {
            console.warn('⚠️ initData empty - using direct user data (mobile fallback)')
            // Use user data directly without backend verification
            setTelegramUser(user)
            localStorage.setItem('telegramUser', JSON.stringify(user))
            setTelegramError(null)
            return
          }
          
          if (user && user.id) {
            setTelegramUser(user)
            localStorage.setItem('telegramUser', JSON.stringify(user))
            
            // Only send to backend if we have initData
            if (initData && initData.trim()) {
              saveTelegramUserToBackend(initData, user)
            } else {
              console.warn('⚠️ No initData available, skipping backend verification')
              setTelegramError('Telegram data available but verification skipped')
            }
          } else {
            // Try cached data
            const cached = localStorage.getItem('telegramUser')
            if (cached) {
              try {
                const parsedUser = JSON.parse(cached)
                setTelegramUser(parsedUser)
                console.log('📦 Loaded cached Telegram user')
              } catch (e) {
                console.error('Failed to parse cached user:', e)
                setTelegramError('Failed to load cached user data')
              }
            } else {
              setTelegramError('No Telegram user data available')
            }
          }
        }, 300) // Small delay to ensure WebApp is fully initialized
      }
    }
  }, [])

  // ✅ Save Telegram user to backend
  const saveTelegramUserToBackend = async (initData: string, user: TelegramUser) => {
    if (!initData || isLoadingTelegram) return

    setIsLoadingTelegram(true)
    setTelegramError(null)

    try {
      console.log('📤 Sending Telegram login to backend...')
      console.log('initData length:', initData.length)
      
      const response = await axios.post(
        `${BACKEND_URL}/api/telegram-login`,
        { initData },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 10000, // 10 second timeout
        }
      )

      if (response.data.success) {
        console.log('✅ Telegram user saved to backend:', response.data)
        setTelegramError(null)
      }
    } catch (error: any) {
      console.error('❌ Failed to save Telegram user:', error)
      const errorMsg = error.response?.data?.error || error.message || 'Failed to connect to backend'
      setTelegramError(errorMsg)
      
      // Still show user data even if backend fails
      console.log('⚠️ Backend save failed, but user data is available locally')
    } finally {
      setIsLoadingTelegram(false)
    }
  }

  // ✅ Link wallet to Telegram when wallet connects
  useEffect(() => {
    if (isConnected && address && telegramUser) {
      linkWalletToTelegram()
    }
  }, [isConnected, address, telegramUser])

  const linkWalletToTelegram = async () => {
    if (!address || !telegramUser) return

    try {
      console.log('🔗 Linking wallet to Telegram account...')
      const response = await axios.post(
        `${BACKEND_URL}/api/link-telegram`,
        {
          walletAddress: address,
          telegramData: telegramUser,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 10000,
        }
      )

      if (response.data.success) {
        console.log('✅ Wallet linked to Telegram:', response.data)
      }
    } catch (error: any) {
      console.error('❌ Failed to link wallet to Telegram:', error)
      // Don't show error to user, just log it
    }
  }

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

        {/* Telegram User Info */}
        {telegramUser && (
          <div className="mb-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
            <div className="flex items-center justify-center gap-3 mb-2">
              {telegramUser.photo_url ? (
                <img
                  src={telegramUser.photo_url}
                  alt={telegramUser.first_name}
                  className="w-12 h-12 rounded-full border-2 border-blue-400"
                  onError={(e) => {
                    // Fallback if image fails to load
                    (e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
              ) : (
                <div className="w-12 h-12 rounded-full border-2 border-blue-400 bg-blue-500 flex items-center justify-center text-white font-bold">
                  {telegramUser.first_name.charAt(0).toUpperCase()}
                </div>
              )}
              <div className="text-left">
                <p className="text-blue-300 font-semibold">
                  {telegramUser.first_name} {telegramUser.last_name || ''}
                </p>
                {telegramUser.username && (
                  <p className="text-blue-400 text-sm">@{telegramUser.username}</p>
                )}
                <p className="text-blue-500 text-xs">ID: {telegramUser.id}</p>
              </div>
            </div>
            <p className="text-green-400 text-xs">
              {isLoadingTelegram ? '⏳ Saving to database...' : '✅ Telegram login successful'}
            </p>
          </div>
        )}

        {/* Telegram Error (only show if no user data) */}
        {telegramError && !telegramUser && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded text-sm text-red-300">
            ⚠️ {telegramError}
          </div>
        )}

        {/* Description */}
        <p className="mb-6 text-lg text-white/80">
          {isConnected
            ? `✅ Wallet connected: ${address?.slice(0, 6)}...${address?.slice(-4)}`
            : isConnecting
            ? '⏳ Connecting to wallet...'
            : telegramUser
            ? `Welcome ${telegramUser.first_name}! Connect your wallet to continue.`
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
        {isTelegram && !isConnecting && !isConnected && !telegramUser && (
          <div className="mt-6 p-3 bg-blue-500/10 border border-blue-500/30 rounded text-sm text-blue-300">
            📱 <strong>Telegram detected!</strong>
            <br />
            Loading user data...
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
        {isConnected && telegramUser && (
          <div className="mt-6 p-3 bg-green-500/10 border border-green-500/30 rounded text-sm text-green-300">
            ✅ <strong>Wallet & Telegram linked successfully!</strong>
            <br />
            You can now proceed to the presale.
          </div>
        )}
      </div>
    </div>
  )
}

export default PresaleEntry