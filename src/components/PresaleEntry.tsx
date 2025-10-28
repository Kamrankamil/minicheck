'use client'

import React, { useEffect, useState } from 'react'
import WebApp from '@twa-dev/sdk'

// Define the interface for Telegram user data
interface TelegramUser {
  id: number
  first_name: string
  last_name?: string
  username?: string
  language_code: string
  is_premium?: boolean
}

const PresaleEntry: React.FC = () => {
  const [user, setUser] = useState<TelegramUser | null>(null)

  useEffect(() => {
    // Initialize Telegram WebApp and get user data
    if (WebApp.initDataUnsafe?.user) {
      setUser(WebApp.initDataUnsafe.user as TelegramUser)
    }

    // Expand to full screen (optional)
    WebApp.expand()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Presale Entry</h1>

      {user ? (
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Authenticated Telegram User</h2>
          <ul className="space-y-2">
            <li><strong>ID:</strong> {user.id}</li>
            <li><strong>First Name:</strong> {user.first_name}</li>
            <li><strong>Last Name:</strong> {user.last_name || 'N/A'}</li>
            <li><strong>Username:</strong> @{user.username || 'N/A'}</li>
            <li><strong>Language:</strong> {user.language_code}</li>
            <li><strong>Premium:</strong> {user.is_premium ? 'Yes' : 'No'}</li>
          </ul>
        </div>
      ) : (
        <div className="text-gray-400 text-lg">Loading user data...</div>
      )}
    </div>
  )
}

export default PresaleEntry
