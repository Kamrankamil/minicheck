import { useState, useEffect } from "react";
import { TonConnectUI, ConnectedWallet } from "@tonconnect/ui-react";

export const useTonWallet = () => {
  const [tonConnectUI, setTonConnectUI] = useState<TonConnectUI | null>(null);
  const [tonWallet, setTonWallet] = useState<ConnectedWallet | null>(null);

  useEffect(() => {
    const connector = new TonConnectUI({
      manifestUrl:
        "https://kora-brotherless-unofficiously.ngrok-free.dev/tonconnect-manifest.json",
    });

    connector.onStatusChange((wallet) => {
      setTonWallet(wallet); // ✅ Now the types match
    });

    setTonConnectUI(connector);
  }, []);

  const connectTonWallet = async () => {
    if (!tonConnectUI) return;
    try {
      await tonConnectUI.connectWallet();
    } catch (err) {
      console.error("TON wallet connection failed:", err);
    }
  };

  return { tonConnectUI, tonWallet, connectTonWallet };
};
