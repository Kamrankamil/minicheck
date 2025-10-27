import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAccount } from 'wagmi';
import axios from 'axios';
import buycexlogo from '../assets/img/BUYCEX-INFINITY.png';
// ✅ Correct imports from Telegram SDK
import { retrieveLaunchParams } from '@telegram-apps/sdk-react';

const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL ||
  (location.hostname === 'localhost' ? 'http://localhost:5000'
                                     : 'https://isochronous-packable-sherly.ngrok-free.dev'); // Change to your ngrok URL in production

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  language_code?: string;
}

const PresaleEntry: React.FC = () => {
  const { isConnected, address, isConnecting } = useAccount();
  const [showInstructions, setShowInstructions] = useState<boolean>(false);
  const [isLoadingTelegram, setIsLoadingTelegram] = useState<boolean>(false);
  const [telegramError, setTelegramError] = useState<string | null>(null);
  const [telegramUser, setTelegramUser] = useState<TelegramUser | null>(null);
  const [hasTriedToConnect, setHasTriedToConnect] = useState<boolean>(false);

  // Warn if AppKit button isn't registered
  useEffect(() => {
    const registered = customElements.get('appkit-button');
    if (!registered) {
      console.warn('⚠️ appkit-button not registered. Check AppKitProvider setup!');
    }
  }, []);

  // ✅ Get Telegram user data using correct SDK method
  useEffect(() => {
    const isTelegram = typeof window !== 'undefined' && !!(window as any).Telegram?.WebApp;
    
    if (isTelegram) {
      try {
        // Use retrieveLaunchParams to get Telegram data
        const launchParams = retrieveLaunchParams();
        console.log('📱 Launch params:', launchParams);

        if (launchParams.initData && typeof launchParams.initData === 'object' && 'user' in launchParams.initData) {
          const user = (launchParams.initData as any).user as TelegramUser;
          console.log('✅ Telegram user detected:', user);
          setTelegramUser(user);
          setTelegramError(null);

          // Cache user data
          localStorage.setItem('telegramUser', JSON.stringify(user));

          // Send to backend if we have raw init data
          if (launchParams.initDataRaw && typeof launchParams.initDataRaw === 'string') {
            saveTelegramUserToBackend(launchParams.initDataRaw, user);
          }
        } else {
          // Fallback: try direct Telegram WebApp API
          const tg = (window as any).Telegram?.WebApp;
          if (tg) {
            tg.ready();
            tg.expand();
            
            const user = tg.initDataUnsafe?.user;
            const initData = tg.initData;
            
            console.log('🔍 Fallback - Telegram user:', user);
            
            if (user && user.id) {
              setTelegramUser(user);
              localStorage.setItem('telegramUser', JSON.stringify(user));
              
              if (initData && typeof initData === 'string') {
                saveTelegramUserToBackend(initData, user);
              }
            } else {
              // Try cached data
              const cached = localStorage.getItem('telegramUser');
              if (cached) {
                try {
                  const parsedUser = JSON.parse(cached);
                  setTelegramUser(parsedUser);
                  console.log('📦 Loaded cached Telegram user');
                } catch (parseError) {
                  console.error('Failed to parse cached user:', parseError);
                  setTelegramError('Failed to load cached data');
                }
              } else {
                setTelegramError('Telegram data unavailable. Please restart the app.');
              }
            }
          }
        }
      } catch (error) {
        console.error('❌ Error getting Telegram data:', error);
        setTelegramError('Failed to load Telegram data');
      }
    }
  }, []);

  // ✅ Save Telegram user to backend
  const saveTelegramUserToBackend = async (initData: string, user: TelegramUser): Promise<void> => {
    if (!initData || isLoadingTelegram) return;

    setIsLoadingTelegram(true);
    setTelegramError(null);

    try {
      console.log('📤 Sending Telegram login to backend...');
      const response = await axios.post<{ success: boolean; data: any }>(
        `${BACKEND_URL}/api/telegram-login`,
        { initData },
        {
          headers: { 'Content-Type': 'application/json' },
          timeout: 10000,
        }
      );

      if (response.data.success) {
        console.log('✅ Telegram user saved to backend:', response.data);
        setTelegramError(null);
      }
    } catch (error: unknown) {
      console.error('❌ Failed to save Telegram user:', error);
      const errorMsg = (axios.isAxiosError(error) && error.response?.data?.error) || 
                       (error as Error).message || 
                       'Failed to connect to backend';
      setTelegramError(errorMsg);
    } finally {
      setIsLoadingTelegram(false);
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
      await axios.post<{ success: boolean; data: any }>(
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

  // ✅ Poll for connection changes when user returns from MetaMask
  useEffect(() => {
    const isTelegram = typeof window !== 'undefined' && !!(window as any).Telegram?.WebApp;
    
    if (isTelegram && hasTriedToConnect && !isConnected) {
      console.log('🔄 Polling for wallet connection...');
      
      // Check every 2 seconds for connection
      const pollInterval = setInterval(() => {
        console.log('🔍 Checking connection status...');
        
        // The useAccount hook should auto-update, but we log for debugging
        if (isConnected) {
          console.log('✅ Connection detected!');
          clearInterval(pollInterval);
        }
      }, 2000);

      // Stop polling after 2 minutes
      const timeout = setTimeout(() => {
        clearInterval(pollInterval);
        console.log('⏱️ Stopped polling after timeout');
      }, 120000);

      return () => {
        clearInterval(pollInterval);
        clearTimeout(timeout);
      };
    }
  }, [hasTriedToConnect, isConnected]);

  return (
    <div className="flex h-screen items-center justify-center bg-black text-white">
      <div className="w-[90%] max-w-md rounded-lg border border-white/10 bg-black/40 p-8 text-center backdrop-blur-lg shadow-lg">
        {/* Logo */}
        <img src={buycexlogo} alt="Buycex Logo" className="mx-auto mb-6 h-14 w-auto" />

        {/* Title */}
        <h1 className="mb-2 text-4xl font-bold text-yellow-400">Enter The Buycex Presale</h1>

        {/* Telegram User Info */}
        {telegramUser ? (
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
                <p className="text-blue-300 font-semibold">{telegramUser.first_name} {telegramUser.last_name || ''}</p>
                {telegramUser.username && <p className="text-blue-400 text-sm">@{telegramUser.username}</p>}
                <p className="text-blue-500 text-xs">ID: {telegramUser.id}</p>
              </div>
            </div>
            <p className="text-green-400 text-xs">
              {isLoadingTelegram ? '⏳ Saving to database...' : '✅ Telegram login successful'}
            </p>
          </div>
        ) : (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-sm text-red-300">
            {telegramError || '🔴 Waiting for Telegram user data. This may be delayed on mobile.'}
          </div>
        )}

        {/* Wallet Connection Status */}
        <div className="mb-6">
          <div className="text-center">
            {isConnected && address ? (
              <div className="p-3 bg-green-500/10 border border-green-500/30 rounded">
                <p className="text-green-400 font-semibold">✅ Wallet Connected</p>
                <p className="text-green-300 text-sm">{address.slice(0, 6)}...{address.slice(-4)}</p>
              </div>
            ) : hasTriedToConnect && !isConnecting ? (
              <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded animate-pulse">
                <p className="text-yellow-400 font-semibold">⏳ Waiting for confirmation...</p>
                <p className="text-yellow-300 text-xs mt-1">
                  Return to Telegram after approving in MetaMask
                </p>
              </div>
            ) : isConnecting ? (
              <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded">
                <p className="text-blue-400 font-semibold">🔄 Connecting...</p>
              </div>
            ) : (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded">
                <p className="text-red-400 font-semibold">🔴 Wallet not connected</p>
              </div>
            )}
          </div>
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
              {telegramUser 
                ? 'Connect your wallet to continue' 
                : 'Waiting for Telegram login...'}
            </p>
          </div>
        )}

        {/* Instructions when connecting */}
        {showInstructions && (
          <div className="mt-4 p-4 border border-yellow-500/30 bg-yellow-500/10 rounded-lg text-sm text-left animate-pulse">
            <p className="text-yellow-300 font-bold mb-2">📱 Important Steps:</p>
            <ol className="list-decimal list-inside text-yellow-200 space-y-1">
              <li>MetaMask should open automatically</li>
              <li>Tap "Connect" in MetaMask</li>
              <li><strong>Return to Telegram immediately</strong></li>
              <li>Wait for confirmation (auto-detects)</li>
            </ol>
            <p className="mt-2 text-xs text-yellow-400">
              💡 Don't close Telegram while connecting
            </p>
          </div>
        )}

        {/* Waiting for connection message */}
        {hasTriedToConnect && !isConnected && !isConnecting && (
          <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded text-sm">
            <p className="text-blue-300">
              ⏳ Checking for wallet connection...
            </p>
            <p className="text-blue-400 text-xs mt-1">
              If you approved in MetaMask, the connection will appear shortly
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PresaleEntry;