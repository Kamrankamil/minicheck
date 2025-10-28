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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [debugInfo, setDebugInfo] = useState<string[]>([]);

  const addDebug = (msg: string) => {
    console.log(msg);
    setDebugInfo(prev => [...prev, `${new Date().toLocaleTimeString()}: ${msg}`]);
  };

  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 30;

    const checkTelegram = () => {
      attempts++;
      addDebug(`Attempt ${attempts}/${maxAttempts}`);
      
      const webapp = (window as any).Telegram?.WebApp;

      if (webapp) {
        addDebug('✅ Telegram found!');
        addDebug(`Platform: ${webapp.platform}`);
        addDebug(`Version: ${webapp.version}`);
        
        setIsTelegram(true);
        setIsLoading(false);
        
        webapp.ready && webapp.ready();
        webapp.expand && webapp.expand();

        const tgUser = webapp.initDataUnsafe?.user ?? null;
        
        if (tgUser) {
          setUser(tgUser);
          addDebug(`✅ User: ${tgUser.first_name}`);
        } else {
          addDebug('⚠️ No user data');
        }
      } else if (attempts < maxAttempts) {
        addDebug('⏳ Not ready, retrying...');
        setTimeout(checkTelegram, 500);
      } else {
        addDebug('❌ Timeout!');
        setIsTelegram(false);
        setIsLoading(false);
      }
    };

    addDebug('🚀 Starting...');
    setTimeout(checkTelegram, 1000);
  }, []);

  if (isLoading) {
    return (
      <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
        <h2>⏳ Loading...</h2>
        <p>Waiting for Telegram SDK...</p>
        <div style={{ 
          marginTop: 20, 
          padding: 10, 
          background: "#f0f0f0", 
          borderRadius: 8,
          fontSize: 12,
          maxHeight: 200,
          overflow: "auto"
        }}>
          <strong>Debug Log:</strong>
          {debugInfo.map((log, i) => (
            <div key={i}>{log}</div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h2>Presale Entry</h2>

      {!isTelegram ? (
        <div>
          <p style={{ color: "#ff6b6b" }}>
            ⚠️ Open this page inside Telegram
          </p>
          <button 
            onClick={() => window.location.reload()} 
            style={{
              marginTop: 15,
              padding: "10px 20px",
              backgroundColor: "#0088cc",
              color: "white",
              border: "none",
              borderRadius: 8,
              cursor: "pointer"
            }}
          >
            🔄 Retry
          </button>
          <details style={{ marginTop: 20 }}>
            <summary style={{ cursor: "pointer", color: "#666" }}>
              Show Debug Info
            </summary>
            <div style={{ 
              marginTop: 10,
              padding: 10,
              background: "#f0f0f0",
              borderRadius: 8,
              fontSize: 12
            }}>
              {debugInfo.map((log, i) => (
                <div key={i}>{log}</div>
              ))}
            </div>
          </details>
        </div>
      ) : user ? (
        <div
          style={{
            background: "#f9f9f9",
            borderRadius: 12,
            padding: 16,
            maxWidth: 400,
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3>👤 Telegram User Info</h3>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Name:</strong> {user.first_name} {user.last_name}</p>
          <p><strong>Username:</strong> {user.username ? `@${user.username}` : "N/A"}</p>
          <p><strong>Language:</strong> {user.language_code ?? "N/A"}</p>
        </div>
      ) : (
        <p style={{ color: "#ffa500" }}>
          ⚠️ No user data. Please restart bot.
        </p>
      )}
    </div>
  );
};

export default PresaleEntry;