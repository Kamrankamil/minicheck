import React, { useEffect, useState } from "react";

type TgUser = {
  id?: number;
  is_bot?: boolean;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code?: string;
};

const PresaleEntry: React.FC = () => {
  const [user, setUser] = useState<TgUser | null>(null);
  const [isTelegram, setIsTelegram] = useState<boolean>(false);

  useEffect(() => {
    // ✅ Use the existing global Telegram object defined in utils/telegram.ts
    const webapp = window.Telegram?.WebApp;

    if (!webapp) {
      setIsTelegram(false);
      return;
    }

    setIsTelegram(true);
    webapp.ready && webapp.ready();

    const tgUser = webapp.initDataUnsafe?.user ?? null;
    if (tgUser) setUser(tgUser);
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h2>Presale Entry</h2>

      {!isTelegram ? (
        <p>⚠️ Open this page inside Telegram to view user data.</p>
      ) : user ? (
        <div
          style={{
            background: "#f9f9f9",
            borderRadius: "12px",
            padding: "16px",
            maxWidth: "400px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3>👤 Telegram User Info</h3>
          <p>
            <strong>ID:</strong> {user.id}
          </p>
          <p>
            <strong>Name:</strong> {user.first_name} {user.last_name}
          </p>
          <p>
            <strong>Username:</strong>{" "}
            {user.username ? `@${user.username}` : "N/A"}
          </p>
          <p>
            <strong>Language:</strong> {user.language_code ?? "N/A"}
          </p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default PresaleEntry;
