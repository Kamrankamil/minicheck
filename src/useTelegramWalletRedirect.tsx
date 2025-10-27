import { useEffect } from "react";

/**
 * Enhanced Telegram wallet redirect with return URL handling
 */
export const initTelegramWalletRedirect = () => {
  try {
    const isTG =
      typeof window !== "undefined" &&
      (window as any)?.Telegram?.WebApp !== undefined;

    const originalOpen = window.open.bind(window);

    const tryOpen = (url?: string | URL | null) => {
      if (!url) return null;
      try {
        let finalUrl = typeof url === "string" ? url : url.toString();

        console.log("🔗 Intercepted window.open:", finalUrl);

        // Extract WalletConnect URI
        const wcMatch = finalUrl.match(/(wc:[^\s]+)/) || finalUrl.match(/[?&]uri=([^&]+)/);
        let wcUri = null;
        
        if (wcMatch) {
          wcUri = wcMatch[1] ? decodeURIComponent(wcMatch[1]) : decodeURIComponent(wcMatch[0]);
        } else if (/walletconnect/i.test(finalUrl) || /wc\?uri=/i.test(finalUrl)) {
          try {
            const urlObj = new URL(finalUrl, window.location.href);
            wcUri = urlObj.searchParams.get("uri") || null;
          } catch {}
        }

        // Build universal link with return URL
        if (wcUri) {
          // Add return URL so MetaMask comes back to Telegram
          const returnUrl = encodeURIComponent(window.location.href);
          const metamaskUniversal = `https://metamask.app.link/wc?uri=${encodeURIComponent(wcUri)}&redirect=${returnUrl}`;
          const trustUniversal = `https://link.trustwallet.com/wc?uri=${encodeURIComponent(wcUri)}`;

          console.log("✅ WalletConnect URI detected, using MetaMask universal link with return URL");
          
          if (isTG) {
            console.log("📱 Opening via Telegram.WebApp.openLink");
            
            // Use openTelegramLink for better handling
            (window as any).Telegram.WebApp.openTelegramLink(metamaskUniversal);
            
            // Show instructions in UI
            setTimeout(() => {
              alert("Please approve the connection in MetaMask, then return to Telegram");
            }, 1000);
            
            return null;
          } else {
            window.location.href = metamaskUniversal;
            return null;
          }
        }

        // Convert custom app schemes to universal links
        if (finalUrl.startsWith("metamask://")) {
          finalUrl = finalUrl.replace("metamask://", "https://metamask.app.link/");
          console.log("🦊 Converted to MetaMask universal link:", finalUrl);
        }
        
        if (finalUrl.startsWith("trust://") || finalUrl.includes("trust://")) {
          finalUrl = finalUrl.replace(/trust:\/\//, "https://link.trustwallet.com/");
          console.log("💎 Converted to Trust universal link:", finalUrl);
        }

        // Open in Telegram WebApp
        if (isTG) {
          console.log("📱 Opening via Telegram.WebApp.openLink:", finalUrl);
          (window as any).Telegram.WebApp.openLink(finalUrl);
          return null;
        }

        // Normal browser fallback
        console.log("🌐 Opening in browser:", finalUrl);
        window.location.href = finalUrl;
        return null;
        
      } catch (err) {
        console.error("❌ Wallet link open failed:", err);
        try {
          return originalOpen(url as any);
        } catch {
          return null;
        }
      }
    };

    // Override window.open globally
    (window as any).open = (url?: string | URL | undefined) => tryOpen(url);

    console.log("✅ Telegram wallet redirect initialized with return URL support");

    return () => {
      (window as any).open = originalOpen;
    };
  } catch (err) {
    console.error("❌ initTelegramWalletRedirect init failed:", err);
    return () => {};
  }
};

export const useTelegramWalletRedirect = () => {
  useEffect(() => {
    const cleanup = initTelegramWalletRedirect();
    return cleanup;
  }, []);
};