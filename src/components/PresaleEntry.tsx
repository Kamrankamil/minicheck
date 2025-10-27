import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAccount } from 'wagmi';
import axios from 'axios';
import buycexlogo from '../assets/img/BUYCEX-INFINITY.png';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'https://isochronous-packable-sherly.ngrok-free.dev';

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  language_code?: string;
  is_premium?: boolean;
}

const PresaleEntry: React.FC = () => {
  const { isConnected, address, isConnecting } = useAccount();
  const [showInstructions, setShowInstructions] = useState<boolean>(false);
  const [isLoadingTelegram, setIsLoadingTelegram] = useState<boolean>(true);
  const [telegramError, setTelegramError] = useState<string | null>(null);
  const [telegramUser, setTelegramUser] = useState<TelegramUser | null>(null);
  const [hasTriedToConnect, setHasTriedToConnect] = useState<boolean>(false);

  // ✅ Get Telegram user data - mobile compatible
  useEffect(() => {
    const initTelegram = async () => {
      try {
        const tg = (window as any).Telegram?.WebApp;
        
        if (!tg) {
          console.warn('⚠️ Telegram WebApp not available');
          setTelegramError('Not running in Telegram');
          setIsLoadingTelegram(false);
          return;
        }

        // Initialize Telegram WebApp
        tg.ready();
        tg.expand();

        console.log('📱 Telegram WebApp initialized');
        console.log('🔍 initData available:', !!tg.initData);
        console.log('👤 initDataUnsafe.user:', tg.initDataUnsafe?.user);

        // Get user from initDataUnsafe (always available)
        const user = tg.initDataUnsafe?.user;
        
        if (user && user.id) {
          console.log('✅ Telegram user found:', user);
          setTelegramUser(user);
          
          // Try to send with initData validation (web)
          const initData = tg.initData;
          if (initData && typeof initData === 'string' && initData.length > 0) {
            console.log('📤 Sending validated Telegram login (web)');
            await saveTelegramUserToBackend(initData, user);
          } else {
            // Fallback: mobile without initData
            console.log('📱 Using mobile fallback (no initData)');
            await saveTelegramUserMobile(user);
          }
          
          setTelegramError(null);
        } else {
          // Try cached data as last resort
          const cached = localStorage.getItem('telegramUser');
          if (cached) {
            try {
              const parsedUser = JSON.parse(cached);
              console.log('📦 Loaded cached Telegram user:', parsedUser);
              setTelegramUser(parsedUser);
              setTelegramError(null);
            } catch (e) {
              console.error('❌ Failed to parse cached user:', e);
              setTelegramError('Failed to load Telegram data');
            }
          } else {
            setTelegramError('Telegram user data not available');
          }
        }
      } catch (error) {
        console.error('❌ Error initializing Telegram:', error);
        setTelegramError('Failed to initialize Telegram');
      } finally {
        setIsLoadingTelegram(false);
      }
    };

    // Small delay to ensure WebApp is ready
    const timer = setTimeout(initTelegram, 500);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Save with hash validation (Telegram Web)
  const saveTelegramUserToBackend = async (initData: string, user: TelegramUser): Promise<void> => {
    try {
      console.log('📤 Sending validated Telegram login...');
      const response = await axios.post(
        `${BACKEND_URL}/api/telegram-login`,
        { initData },
        {
          headers: { 'Content-Type': 'application/json' },
          timeout: 10000,
        }
      );

      if (response.data.success) {
        console.log('✅ Telegram user saved (validated):', response.data);
        localStorage.setItem('telegramUser', JSON.stringify(user));
      }
    } catch (error) {
      console.error('❌ Validated login failed, trying mobile fallback:', error);
      // If validation fails, use mobile method
      await saveTelegramUserMobile(user);
    }
  };

  // ✅ Mobile fallback (no hash validation)
  const saveTelegramUserMobile = async (user: TelegramUser): Promise<void> => {
    try {
      console.log('📱 Sending mobile Telegram login...');
      const response = await axios.post(
        `${BACKEND_URL}/api/telegram-login-mobile`,
        { telegramUser: user },
        {
          headers: { 'Content-Type': 'application/json' },
          timeout: 10000,
        }
      );

      if (response.data.success) {
        console.log('✅ Mobile Telegram user saved:', response.data);
        localStorage.setItem('telegramUser', JSON.stringify(user));
      }
    } catch (error) {
      console.error('❌ Mobile login failed:', error);
      throw error;
    }
  };

  // ✅ Link wallet to Telegram when wallet connects
  useEffect(() => {
    if (isConnected && address && telegramUser) {
      linkWalletToTelegram();
    }
  }, [isConnected, address, telegramUser]);

  const linkWalletToTelegram = async (): Promise<void> => {
    if (!address || !telegramUser) return;

    try {
      console.log('🔗 Linking wallet to Telegram account...');
      await axios.post(
        `${BACKEND_URL}/api/link-telegram`,
        {
          walletAddress: address,
          telegramData: telegramUser,
        },
        {
          headers: { 'Content-Type': 'application/json' },
          timeout: 10000,
        }
      );
      console.log('✅ Wallet linked to Telegram');
    } catch (error) {
      console.error('❌ Failed to link wallet to Telegram:', error);
    }
  };

  // ✅ Show instructions when connecting
  useEffect(() => {
    if (isConnecting) {
      setShowInstructions(true);
      setHasTriedToConnect(true);
    } else {
      setShowInstructions(false);
    }
  }, [isConnecting]);

  // ✅ Poll for connection changes
  useEffect(() => {
    if (hasTriedToConnect && !isConnected && !isConnecting) {
      console.log('🔄 Polling for wallet connection...');
      
      const pollInterval = setInterval(() => {
        if (isConnected) {
          console.log('✅ Connection detected!');
          clearInterval(pollInterval);
        }
      }, 2000);

      const timeout = setTimeout(() => {
        clearInterval(pollInterval);
        console.log('⏱️ Stopped polling');
      }, 120000);

      return () => {
        clearInterval(pollInterval);
        clearTimeout(timeout);
      };
    }
  }, [hasTriedToConnect, isConnected, isConnecting]);

  return (
    <div className="flex h-screen items-center justify-center bg-black text-white">
      <div className="w-[90%] max-w-md rounded-lg border border-white/10 bg-black/40 p-8 text-center backdrop-blur-lg shadow-lg">
        {/* Logo */}
        <img src={buycexlogo} alt="Buycex Logo" className="mx-auto mb-6 h-14 w-auto" />

        {/* Title */}
        <h1 className="mb-2 text-4xl font-bold text-yellow-400">Enter The Buycex Presale</h1>

        {/* Telegram User Info */}
        {isLoadingTelegram ? (
          <div className="mb-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm text-blue-300 animate-pulse">
            🔄 Loading Telegram data...
          </div>
        ) : telegramUser ? (
          <div className="mb-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
            <div className="flex items-center justify-center gap-3 mb-2">
              {telegramUser.photo_url ? (
                <img
                  src={telegramUser.photo_url}
                  alt={telegramUser.first_name}
                  className="w-12 h-12 rounded-full border-2 border-blue-400"
                  onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
                />
              ) : (
                <div className="w-12 h-12 rounded-full border-2 border-blue-400 bg-blue-500 flex items-center justify-center text-white font-bold">
                  {telegramUser.first_name.charAt(0).toUpperCase()}
                </div>
              )}
              <div className="text-left">
                <p className="text-blue-300 font-semibold">
                  {telegramUser.first_name} {telegramUser.last_name || ''}
                  {telegramUser.is_premium && ' ⭐'}
                </p>
                {telegramUser.username && <p className="text-blue-400 text-sm">@{telegramUser.username}</p>}
                <p className="text-blue-500 text-xs">ID: {telegramUser.id}</p>
              </div>
            </div>
            <p className="text-green-400 text-xs">✅ Telegram login successful</p>
          </div>
        ) : (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-sm text-red-300">
            🔴 {telegramError || 'Waiting for Telegram user data. This may be delayed on mobile.'}
          </div>
        )}

        {/* Wallet Connection Status */}
        <div className="mb-6">
          {isConnected && address ? (
            <div className="p-3 bg-green-500/10 border border-green-500/30 rounded">
              <p className="text-green-400 font-semibold">✅ Wallet Connected</p>
              <p className="text-green-300 text-sm">{address.slice(0, 6)}...{address.slice(-4)}</p>
            </div>
          ) : hasTriedToConnect && !isConnecting ? (
            <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded animate-pulse">
              <p className="text-yellow-400 font-semibold">⏳ Waiting for confirmation...</p>
              <p className="text-yellow-300 text-xs mt-1">Return to Telegram after approving in MetaMask</p>
            </div>
          ) : isConnecting ? (
            <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded">
              <p className="text-blue-400 font-semibold">🔄 Connecting...</p>
            </div>
          ) : (
            <div className="p-3 bg-gray-500/10 border border-gray-500/30 rounded">
              <p className="text-gray-400 font-semibold">🔴 Wallet not connected</p>
            </div>
          )}
        </div>

        {/* Action Button */}
        {isConnected && telegramUser ? (
          <NavLink
            to="/home"
            className="w-full inline-block px-6 py-3 rounded-lg text-lg font-bold text-black bg-yellow-400 hover:bg-yellow-500 transition-colors"
          >
            Enter Presale
          </NavLink>
        ) : (
          <div className="w-full">
            <div className="flex justify-center mb-4">
              <appkit-button />
            </div>
            <p className="text-gray-400 text-sm">
              {!telegramUser 
                ? 'Waiting for Telegram login...' 
                : 'Connect your wallet to continue'}
            </p>
          </div>
        )}

        {/* Instructions */}
        {showInstructions && (
          <div className="mt-4 p-4 border border-yellow-500/30 bg-yellow-500/10 rounded-lg text-sm text-left animate-pulse">
            <p className="text-yellow-300 font-bold mb-2">📱 Important Steps:</p>
            <ol className="list-decimal list-inside text-yellow-200 space-y-1">
              <li>MetaMask should open automatically</li>
              <li>Tap "Connect" in MetaMask</li>
              <li><strong>Return to Telegram immediately</strong></li>
              <li>Wait for confirmation (auto-detects)</li>
            </ol>
          </div>
        )}

        {/* Debug info (remove in production) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-4 p-2 bg-gray-800 rounded text-xs text-left">
            <p>Backend: {BACKEND_URL}</p>
            <p>TG User: {telegramUser ? '✅' : '❌'}</p>
            <p>Wallet: {isConnected ? '✅' : '❌'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PresaleEntry;