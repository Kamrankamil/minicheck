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
}

const PresaleEntry: React.FC = () => {
  const { isConnected, address, isConnecting } = useAccount();
  const [showInstructions, setShowInstructions] = useState(false);
  const [telegramUser, setTelegramUser] = useState<TelegramUser | null>(null);
  const [telegramError, setTelegramError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initTelegram = () => {
      console.log('🚀 Initializing Telegram...');
      
      // Direct access to Telegram SDK
      const tg = (window as any).Telegram?.WebApp;
      
      if (!tg) {
        console.error('❌ Telegram SDK not available');
        console.log('window.Telegram:', (window as any).Telegram);
        setTelegramError('Not running in Telegram app. Please open via bot button.');
        setIsLoading(false);
        return;
      }

      console.log('✅ Telegram SDK found');
      console.log('Platform:', tg.platform);
      console.log('Version:', tg.version);
      console.log('InitData:', tg.initData?.substring(0, 50) + '...');
      
      // Get user from initDataUnsafe
      const user = tg.initDataUnsafe?.user;
      console.log('User data:', user);

      if (user?.id) {
        console.log('✅ User found:', user.first_name);
        setTelegramUser(user);
        
        // ✅ NEW: Send raw initData for validation
        const initDataRaw = tg.initData;
        if (initDataRaw && initDataRaw.length > 0) {
          console.log('📤 Sending initDataRaw for validation...');
          saveTelegramUserValidated(initDataRaw, user);
        } else {
          console.warn('⚠️ No initData available, using fallback');
          saveTelegramUserMobile(user);
        }
        
        setTelegramError(null);
      } else {
        console.warn('⚠️ No user data');
        setTelegramError('User data not available');
      }
      
      setIsLoading(false);
    };

    // Wait a bit for SDK to be ready
    setTimeout(initTelegram, 500);
  }, []);

  // ✅ NEW: Send initDataRaw for server-side validation
  const saveTelegramUserValidated = async (initDataRaw: string, user: TelegramUser) => {
    try {
      console.log('🔐 Sending validated init data...');
      console.log('InitDataRaw length:', initDataRaw.length);
      
      const response = await axios.post(
        `${BACKEND_URL}/api/telegram-login`,
        { initDataRaw }, // ✅ Send as initDataRaw (not initData)
        {
          headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': '69420'
          }
        }
      );
      
      console.log('✅ User validated and saved:', response.data);
    } catch (error: any) {
      console.error('❌ Validation failed:', error.response?.data || error.message);
      console.warn('⚠️ Falling back to mobile method');
      saveTelegramUserMobile(user);
    }
  };

  // ✅ Fallback for testing/dev (no validation)
  const saveTelegramUserMobile = async (user: TelegramUser) => {
    try {
      console.log('📱 Saving user (mobile fallback)...');
      const response = await axios.post(
        `${BACKEND_URL}/api/telegram-login-mobile`,
        { telegramUser: user },
        {
          headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': '69420'
          }
        }
      );
      console.log('✅ User saved (mobile):', response.data);
    } catch (error: any) {
      console.error('❌ Save failed:', error.response?.data || error.message);
    }
  };

  useEffect(() => {
    if (isConnected && address && telegramUser) {
      linkWallet();
    }
  }, [isConnected, address, telegramUser]);

  const linkWallet = async () => {
    try {
      console.log('🔗 Linking wallet...');
      const response = await axios.post(
        `${BACKEND_URL}/api/link-telegram`,
        {
          walletAddress: address,
          telegramData: telegramUser,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': '69420'
          }
        }
      );
      console.log('✅ Wallet linked:', response.data);
    } catch (error: any) {
      console.error('❌ Link failed:', error.response?.data || error.message);
    }
  };

  useEffect(() => {
    setShowInstructions(isConnecting);
  }, [isConnecting]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <div className="mb-4 text-4xl">⏳</div>
          <p className="text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen items-center justify-center bg-black text-white">
      <div className="w-[90%] max-w-md rounded-lg border border-white/10 bg-black/40 p-8 text-center backdrop-blur-lg shadow-lg">
        <img src={buycexlogo} alt="Buycex Logo" className="mx-auto mb-6 h-14 w-auto" />
        <h1 className="mb-2 text-4xl font-bold text-yellow-400">Enter The Buycex Presale</h1>

        {/* Telegram Status */}
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
              </div>
            </div>
            <p className="text-green-400 text-xs mt-2">✅ Telegram connected</p>
          </div>
        ) : (
          <div className="mb-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
            <p className="text-red-300 text-sm">🔴 {telegramError}</p>
            <p className="text-red-400 text-xs mt-2">
              Please open via: @Buycex_presale_bot
            </p>
          </div>
        )}

        {/* Wallet Status */}
        <div className="mb-6">
          {isConnected && address ? (
            <div className="p-3 bg-green-500/10 border border-green-500/30 rounded">
              <p className="text-green-400 font-semibold">✅ Wallet Connected</p>
              <p className="text-green-300 text-sm">
                {address.slice(0, 6)}...{address.slice(-4)}
              </p>
            </div>
          ) : (
            <div className="p-3 bg-gray-500/10 border border-gray-500/30 rounded">
              <p className="text-gray-400">🔴 Wallet not connected</p>
            </div>
          )}
        </div>

        {/* Action */}
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
              {!telegramUser ? 'Open via Telegram bot' : 'Connect wallet to continue'}
            </p>
          </div>
        )}

        {showInstructions && (
          <div className="mt-4 p-4 border border-yellow-500/30 bg-yellow-500/10 rounded-lg text-sm">
            <p className="text-yellow-300 font-bold mb-2">📱 Steps:</p>
            <ol className="list-decimal list-inside text-yellow-200 text-left">
              <li>Approve in MetaMask</li>
              <li>Return to Telegram</li>
              <li>Wait for confirmation</li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default PresaleEntry;