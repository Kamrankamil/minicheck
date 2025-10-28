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
  const [debugInfo, setDebugInfo] = useState<string>('');

  // ✅ Get Telegram user data - works on mobile & web
  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 10;

    const initTelegram = () => {
      try {
        // Check if Telegram WebApp is available
        const tg = (window as any).Telegram?.WebApp;
        
        if (!tg) {
          retryCount++;
          setDebugInfo(`Retry ${retryCount}/${maxRetries} - Waiting for Telegram SDK...`);
          
          if (retryCount < maxRetries) {
            setTimeout(initTelegram, 500);
            return;
          }
          
          console.error('❌ Telegram WebApp SDK not available after retries');
          setTelegramError('Not running in Telegram app');
          setIsLoadingTelegram(false);
          return;
        }

        // Initialize Telegram WebApp
        tg.ready();
        tg.expand();
        
        // Disable vertical swipes to close
        tg.disableVerticalSwipes?.();

        console.log('📱 Telegram WebApp SDK loaded');
        console.log('🔍 Platform:', tg.platform);
        console.log('🔍 Version:', tg.version);
        console.log('🔍 initData length:', tg.initData?.length || 0);
        console.log('👤 User:', tg.initDataUnsafe?.user);

        setDebugInfo(`Platform: ${tg.platform}, Version: ${tg.version}`);

        // Get user from initDataUnsafe (always available)
        const user = tg.initDataUnsafe?.user;
        
        if (user && user.id) {
          console.log('✅ Telegram user found:', user);
          setTelegramUser(user);
          localStorage.setItem('telegramUser', JSON.stringify(user));
          
          // Try validated login first (works on web)
          const initData = tg.initData;
          if (initData && typeof initData === 'string' && initData.length > 0) {
            console.log('📤 Using validated login (web)');
            saveTelegramUserToBackend(initData, user);
          } else {
            // Mobile fallback
            console.log('📱 Using mobile fallback');
            saveTelegramUserMobile(user);
          }
          
          setTelegramError(null);
        } else {
          // Try cached data
          const cached = localStorage.getItem('telegramUser');
          if (cached) {
            try {
              const parsedUser = JSON.parse(cached);
              console.log('📦 Using cached user data');
              setTelegramUser(parsedUser);
              setTelegramError(null);
            } catch (e) {
              console.error('❌ Failed to parse cached user:', e);
              setTelegramError('Failed to load user data');
            }
          } else {
            console.error('❌ No user data available');
            setTelegramError('User data not available');
          }
        }
        
        setIsLoadingTelegram(false);
      } catch (error) {
        console.error('❌ Error initializing Telegram:', error);
        setTelegramError(`Initialization error: ${(error as Error).message}`);
        setIsLoadingTelegram(false);
      }
    };

    // Start initialization after a small delay
    const timer = setTimeout(initTelegram, 300);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Save with hash validation (Telegram Web)
  const saveTelegramUserToBackend = async (initData: string, user: TelegramUser): Promise<void> => {
    try {
      console.log('📤 Sending validated login...');
      const response = await axios.post(
        `${BACKEND_URL}/api/telegram-login`,
        { initData },
        {
          headers: { 'Content-Type': 'application/json' },
          timeout: 10000,
        }
      );

      if (response.data.success) {
        console.log('✅ Validated login successful');
      }
    } catch (error) {
      console.error('⚠️ Validated login failed, using mobile fallback:', error);
      // Fallback to mobile method
      await saveTelegramUserMobile(user);
    }
  };

  // ✅ Mobile fallback (no hash validation)
  const saveTelegramUserMobile = async (user: TelegramUser): Promise<void> => {
    try {
      console.log('📱 Sending mobile login...');
      const response = await axios.post(
        `${BACKEND_URL}/api/telegram-login-mobile`,
        { telegramUser: user },
        {
          headers: { 'Content-Type': 'application/json' },
          timeout: 10000,
        }
      );

      if (response.data.success) {
        console.log('✅ Mobile login successful');
      }
    } catch (error) {
      console.error('❌ Mobile login failed:', error);
    }
  };

  // ✅ Link wallet to Telegram
  useEffect(() => {
    if (isConnected && address && telegramUser) {
      linkWalletToTelegram();
    }
  }, [isConnected, address, telegramUser]);

  const linkWalletToTelegram = async (): Promise<void> => {
    if (!address || !telegramUser) return;

    try {
      console.log('🔗 Linking wallet...');
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
      console.log('✅ Wallet linked');
    } catch (error) {
      console.error('❌ Failed to link wallet:', error);
    }
  };

  // ✅ Show instructions
  useEffect(() => {
    if (isConnecting) {
      setShowInstructions(true);
      setHasTriedToConnect(true);
    } else {
      setShowInstructions(false);
    }
  }, [isConnecting]);

  // ✅ Poll for connection
  useEffect(() => {
    if (hasTriedToConnect && !isConnected && !isConnecting) {
      const pollInterval = setInterval(() => {
        if (isConnected) {
          clearInterval(pollInterval);
        }
      }, 2000);

      const timeout = setTimeout(() => clearInterval(pollInterval), 120000);
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
          <div className="mb-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg animate-pulse">
            <p className="text-blue-300 text-sm">🔄 Loading Telegram data...</p>
            {debugInfo && <p className="text-blue-400 text-xs mt-1">{debugInfo}</p>}
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
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
            <p className="text-red-300 text-sm">🔴 {telegramError}</p>
            {debugInfo && <p className="text-red-400 text-xs mt-1">{debugInfo}</p>}
          </div>
        )}

        {/* Wallet Status */}
        <div className="mb-6">
          {isConnected && address ? (
            <div className="p-3 bg-green-500/10 border border-green-500/30 rounded">
              <p className="text-green-400 font-semibold">✅ Wallet Connected</p>
              <p className="text-green-300 text-sm">{address.slice(0, 6)}...{address.slice(-4)}</p>
            </div>
          ) : hasTriedToConnect && !isConnecting ? (
            <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded animate-pulse">
              <p className="text-yellow-400 font-semibold">⏳ Waiting for confirmation...</p>
              <p className="text-yellow-300 text-xs mt-1">Return to Telegram after approving</p>
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
              {!telegramUser ? 'Waiting for Telegram...' : 'Connect wallet to continue'}
            </p>
          </div>
        )}

        {/* Instructions */}
        {showInstructions && (
          <div className="mt-4 p-4 border border-yellow-500/30 bg-yellow-500/10 rounded-lg text-sm text-left">
            <p className="text-yellow-300 font-bold mb-2">📱 Steps:</p>
            <ol className="list-decimal list-inside text-yellow-200 space-y-1">
              <li>Approve in MetaMask</li>
              <li>Return to Telegram</li>
              <li>Wait for auto-detection</li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default PresaleEntry;