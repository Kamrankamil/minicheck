'use client'

import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAccount } from 'wagmi'
import axios from 'axios'
import WebApp from '@twa-dev/sdk'
import buycexlogo from '../assets/img/BUYCEX-INFINITY.png'

const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL ||
  'https://isochronous-packable-sherly.ngrok-free.dev'

interface TelegramUser {
  id: number
  first_name: string
  last_name?: string
  username?: string
  photo_url?: string
  language_code?: string
  is_premium?: boolean
  allows_write_to_pm?: boolean
}

const PresaleEntry: React.FC = () => {
  const { isConnected, address, isConnecting } = useAccount()

  const [showInstructions, setShowInstructions] = useState(false)
  const [telegramUser, setTelegramUser] = useState<TelegramUser | null>(null)
  const [validationStatus, setValidationStatus] =
    useState<'pending' | 'validated' | 'fallback'>('pending')

  useEffect(() => {
    console.log('🔍 PresaleEntry mounted')
    console.log('WebApp:', WebApp)
    console.log('initDataUnsafe:', WebApp.initDataUnsafe)
    console.log('User:', WebApp.initDataUnsafe?.user)

    // Read user data
    if (WebApp.initDataUnsafe?.user) {
      const user = WebApp.initDataUnsafe.user as TelegramUser
      console.log('✅ User found:', user)
      setTelegramUser(user)

      const initDataRaw = WebApp.initData
      if (initDataRaw && initDataRaw.length > 0) {
        saveTelegramUserValidated(initDataRaw, user)
      } else {
        console.warn('⚠️ No initData, using fallback')
        setValidationStatus('fallback')
        saveTelegramUserMobile(user)
      }
    } else {
      console.warn('❌ No user in initDataUnsafe')
    }
  }, [])

  const saveTelegramUserValidated = async (
    initDataRaw: string,
    user: TelegramUser
  ) => {
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/telegram-login`,
        { initDataRaw },
        {
          headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': '69420'
          },
          timeout: 10000
        }
      )
      console.log('✅ Validated:', res.data)
      setValidationStatus('validated')
    } catch (err: any) {
      console.warn('⚠️ Validation failed:', err?.response?.data || err?.message)
      setValidationStatus('fallback')
      saveTelegramUserMobile(user)
    }
  }

  const saveTelegramUserMobile = async (user: TelegramUser) => {
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/telegram-login-mobile`,
        { telegramUser: user },
        {
          headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': '69420'
          },
          timeout: 10000
        }
      )
      console.log('✅ Saved (mobile):', res.data)
    } catch (err: any) {
      console.error('❌ Save failed:', err?.response?.data || err?.message)
    }
  }

  useEffect(() => {
    if (isConnected && address && telegramUser) {
      linkWallet()
    }
  }, [isConnected, address, telegramUser])

  const linkWallet = async () => {
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/link-telegram`,
        {
          walletAddress: address,
          telegramData: telegramUser
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': '69420'
          }
        }
      )
      console.log('✅ Wallet linked:', res.data)
    } catch (err: any) {
      console.error('❌ Link failed:', err?.response?.data || err?.message)
    }
  }

  useEffect(() => {
    setShowInstructions(isConnecting)
  }, [isConnecting])

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white p-4">
      <div className="w-full max-w-md rounded-lg border border-white/10 bg-black/40 p-6 text-center backdrop-blur-lg shadow-lg">
        <img src={buycexlogo} alt="Buycex Logo" className="mx-auto mb-6 h-14 w-auto" />
        <h1 className="mb-4 text-3xl font-bold text-yellow-400">Enter The Buycex Presale</h1>

        {telegramUser ? (
          <div className="mb-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
            <div className="flex items-center justify-center gap-3">
              {telegramUser.photo_url ? (
                <img
                  src={telegramUser.photo_url}
                  alt={telegramUser.first_name}
                  className="w-12 h-12 rounded-full border-2 border-green-400"
                />
              ) : (
                <div className="w-12 h-12 rounded-full border-2 border-green-400 bg-green-500 flex items-center justify-center text-white font-bold text-xl">
                  {telegramUser.first_name.charAt(0).toUpperCase()}
                </div>
              )}
              <div className="text-left">
                <p className="text-green-300 font-semibold">
                  {telegramUser.first_name} {telegramUser.last_name || ''}
                </p>
                {telegramUser.username && (
                  <p className="text-green-400 text-sm">@{telegramUser.username}</p>
                )}
                {telegramUser.is_premium && (
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">⭐ Premium</span>
                )}
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-2">
              <p className="text-green-400 text-xs">✅ Telegram connected</p>
              {validationStatus === 'validated' && (
                <span className="text-xs bg-green-500/20 text-green-300 px-2 py-0.5 rounded">🔐 Verified</span>
              )}
              {validationStatus === 'fallback' && (
                <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded">⚠️ Dev mode</span>
              )}
            </div>
          </div>
        ) : (
          <div className="mb-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <p className="text-yellow-300 text-sm">⚠️ Open this app from @Buycex_presale_bot</p>
            <p className="text-yellow-400 text-xs mt-2">Click the button in the bot message</p>
          </div>
        )}

        <div className="mb-6">
          {isConnected && address ? (
            <div className="p-3 bg-green-500/10 border border-green-500/30 rounded">
              <p className="text-green-400 font-semibold">✅ Wallet Connected</p>
              <p className="text-green-300 text-sm font-mono break-all">
                {address.slice(0, 6)}...{address.slice(-4)}
              </p>
            </div>
          ) : (
            <div className="p-3 bg-gray-500/10 border border-gray-500/30 rounded">
              <p className="text-gray-400">🔴 Wallet not connected</p>
            </div>
          )}
        </div>

        {isConnected && telegramUser ? (
          <NavLink
            to="/home"
            className="w-full inline-block px-6 py-3 rounded-lg text-lg font-bold text-black bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 transition-colors"
          >
            Enter Presale
          </NavLink>
        ) : (
          <div className="w-full">
            <div className="flex justify-center mb-4">
              <appkit-button />
            </div>
            <p className="text-gray-400 text-sm">
              {!telegramUser ? 'Open via Telegram bot' : 'Connect wallet to continue'}
            </p>
          </div>
        )}

        {showInstructions && (
          <div className="mt-4 p-4 border border-yellow-500/30 bg-yellow-500/10 rounded-lg text-sm">
            <p className="text-yellow-300 font-bold mb-2">📱 Steps:</p>
            <ol className="list-decimal list-inside text-yellow-200 text-left space-y-1">
              <li>Approve in MetaMask</li>
              <li>Return to Telegram</li>
              <li>Wait for confirmation</li>
            </ol>
          </div>
        )}

        {/* Debug panel */}
        {import.meta.env.DEV && (
          <details className="mt-4 text-left">
            <summary className="text-xs text-gray-500 cursor-pointer">🔍 Debug Info</summary>
            <pre className="text-xs text-gray-400 mt-2 p-2 bg-gray-900 rounded overflow-auto max-h-40">
              {JSON.stringify(
                {
                  hasTelegramUser: !!telegramUser,
                  userId: telegramUser?.id,
                  platform: WebApp.platform,
                  version: WebApp.version,
                  hasInitData: !!WebApp.initData,
                  validationStatus
                },
                null,
                2
              )}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
}

export default PresaleEntry