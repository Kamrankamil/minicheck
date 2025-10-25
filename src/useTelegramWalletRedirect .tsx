import { openLink } from "@telegram-apps/sdk";
import { useEffect } from "react";

export const useTelegramWalletRedirect = () => {
  useEffect(() => {
    const init = async () => {
      const isTG =
        typeof window !== "undefined" &&
        (window as any)?.Telegram?.WebApp;

      const originalOpen = window.open;

      window.open = (url?: string | URL | undefined) => {
        if (!url) return null;

        try {
          let finalUrl = typeof url === "string" ? url : url.toString();

          // 🦊 Replace metamask:// with universal link
          if (finalUrl.startsWith("metamask://")) {
            finalUrl = finalUrl.replace(
              "metamask://",
              "https://metamask.app.link/"
            );
          }

          console.log("🧩 Opening wallet link:", finalUrl);

          // ✅ In Telegram, open external link in browser
          if (isTG) {
            (window as any)?.Telegram?.WebApp?.openTelegramLink(finalUrl);
          } else {
            // fallback for desktop browser
            window.location.href = finalUrl;
          }
        } catch (err) {
          console.error("Wallet link open failed:", err);
          if (originalOpen) originalOpen(url);
        }

        return null;
      };
    };

    init();
  }, []);
};
