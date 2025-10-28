import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import crypto from 'crypto';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';

dotenv.config();

const app = express();

// ✅ Trust proxy
app.set('trust proxy', 1);

// ✅ CORS
app.use(cors({
  origin: (origin, cb) => {
    const whitelist = [
      'http://localhost:5173',
      'https://minicheck.vercel.app',
      'https://isochronous-packable-sherly.ngrok-free.dev',
      'https://kora-brotherless-unofficiously.ngrok-free.dev',
      'https://web.telegram.org',
      'https://t.me',
    ];
    if (!origin) return cb(null, true);
    try {
      const ok = whitelist.includes(origin) || /\.ngrok-free\.dev$/i.test(new URL(origin).hostname);
      return ok ? cb(null, true) : cb(new Error('Not allowed by CORS'));
    } catch {
      return cb(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'ngrok-skip-browser-warning'],
  optionsSuccessStatus: 204
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Rate limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => req.path === '/api/health'
});

app.use('/api/', apiLimiter);

// ✅ Environment variables
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/launchguard';
const PORT = process.env.PORT || 5000;

if (!BOT_TOKEN) {
  throw new Error('❌ TELEGRAM_BOT_TOKEN environment variable is required');
}

// ✅ MongoDB connection
mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// --- Schemas ---
const TaskSchema = new mongoose.Schema({
  name: String,
  reward: Number,
  completed: { type: Boolean, default: false }
});

const WalletSchema = new mongoose.Schema({
  walletAddress: { type: String, required: true, unique: true },
  connectedAt: { type: Date, default: Date.now },
  tasks: { type: [TaskSchema], default: [] },
  totalReward: { type: Number, default: 0 },
  totalHoldings: { type: Number, default: 0 },
  referredBy: { type: String, default: null },
  friendsReferred: { type: Number, default: 0 },
  referrals: { type: [String], default: [] },
  telegramId: { type: String, default: null },
  telegramUsername: { type: String, default: null },
  telegramFirstName: { type: String, default: null },
  telegramLastName: { type: String, default: null },
  telegramPhotoUrl: { type: String, default: null },
  telegramConnected: { type: Boolean, default: false }
});

WalletSchema.index({ telegramId: 1 });
WalletSchema.index({ totalReward: -1 });
WalletSchema.index({ totalHoldings: -1 });

const Wallet = mongoose.model('Wallet', WalletSchema);

// ✅ Validation helper
const isValidWalletAddress = (address) => {
  return /^0x[a-fA-F0-9]{40}$/.test(address) || 
         address.startsWith('tg_') || 
         address.startsWith('temp_') || 
         address.startsWith('ref_');
};

// ✅ NEW: Validate Telegram Init Data
function validateInitData(initData, botToken) {
  try {
    const params = new URLSearchParams(initData);
    const hash = params.get('hash');
    
    if (!hash) {
      throw new Error('Missing hash parameter');
    }

    // Step 1: Get all params except hash and create data check string
    const dataCheckArray = [];
    for (const [key, value] of params.entries()) {
      if (key !== 'hash') {
        dataCheckArray.push(`${key}=${value}`);
      }
    }
    
    // Step 2: Sort alphabetically
    dataCheckArray.sort();
    const dataCheckString = dataCheckArray.join('\n');

    // Step 3: Create secret key from bot token
    const secretKey = crypto
      .createHash('sha256')
      .update(botToken)
      .digest();

    // Step 4: Create HMAC-SHA256 signature
    const computedHash = crypto
      .createHmac('sha256', secretKey)
      .update(dataCheckString)
      .digest('hex');

    // Step 5: Compare hashes
    if (computedHash !== hash) {
      throw new Error('Invalid hash');
    }

    // Step 6: Check expiration (optional but recommended)
    const authDate = parseInt(params.get('auth_date') || '0');
    const currentTime = Math.floor(Date.now() / 1000);
    const maxAge = 86400; // 24 hours in seconds

    if (currentTime - authDate > maxAge) {
      throw new Error('Init data expired');
    }

    // Step 7: Parse user data
    const userStr = params.get('user');
    if (!userStr) {
      throw new Error('Missing user data');
    }

    const user = JSON.parse(userStr);
    
    return {
      valid: true,
      user,
      authDate,
      queryId: params.get('query_id'),
      chatType: params.get('chat_type'),
      chatInstance: params.get('chat_instance'),
      startParam: params.get('start_param')
    };
  } catch (err) {
    console.error('❌ Init data validation error:', err.message);
    return {
      valid: false,
      error: err.message
    };
  }
}

// ✅ NEW: Middleware to validate init data from Authorization header
function validateTelegramAuth(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
      return res.status(401).json({ success: false, error: 'Missing Authorization header' });
    }

    const [scheme, credentials] = authHeader.split(' ');
    
    if (scheme !== 'tma' || !credentials) {
      return res.status(401).json({ success: false, error: 'Invalid Authorization format' });
    }

    const validation = validateInitData(credentials, BOT_TOKEN);
    
    if (!validation.valid) {
      return res.status(403).json({ success: false, error: validation.error || 'Invalid init data' });
    }

    // Attach validated user data to request
    req.telegramUser = validation.user;
    req.telegramAuthDate = validation.authDate;
    
    next();
  } catch (err) {
    console.error('❌ Auth middleware error:', err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
}

// --- Add / Update Wallet ---
app.post('/api/wallet', async (req, res) => {
  try {
    const { walletAddress, referrer } = req.body;
    
    if (!walletAddress) {
      return res.status(400).json({ success: false, error: 'Wallet address required' });
    }

    if (!isValidWalletAddress(walletAddress)) {
      return res.status(400).json({ success: false, error: 'Invalid wallet address format' });
    }

    const defaultTasks = [
      { name: 'Join Telegram', reward: 0.01, completed: false },
      { name: 'On board 2 friends', reward: 0.02, completed: false },
      { name: 'On board 5 friends', reward: 0.05, completed: false },
    ];

    let wallet = await Wallet.findOne({ walletAddress });

    if (!wallet) {
      wallet = new Wallet({ walletAddress, tasks: defaultTasks, referredBy: referrer || null });
      await wallet.save();

      if (referrer && isValidWalletAddress(referrer)) {
        const referrerWallet = await Wallet.findOne({ walletAddress: referrer });
        if (referrerWallet && !referrerWallet.referrals.includes(walletAddress)) {
          referrerWallet.friendsReferred += 1;
          referrerWallet.referrals.push(walletAddress);
          referrerWallet.totalReward += 0.01;

          for (const task of referrerWallet.tasks) {
            if (!task.completed) {
              if ((task.name === "On board 2 friends" && referrerWallet.friendsReferred >= 2) ||
                  (task.name === "On board 5 friends" && referrerWallet.friendsReferred >= 5)) {
                task.completed = true;
                referrerWallet.totalReward += task.reward;
              }
            }
          }
          await referrerWallet.save();
        }
      }
    }

    res.json({ success: true, wallet });
  } catch (err) {
    console.error('❌ Error in /api/wallet:', err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// --- Complete Task ---
app.post('/api/complete-task', async (req, res) => {
  try {
    const { walletAddress, taskName } = req.body;
    
    if (!walletAddress || !taskName) {
      return res.status(400).json({ success: false, error: 'Wallet address and task name required' });
    }

    const wallet = await Wallet.findOne({ walletAddress });
    if (!wallet) return res.status(404).json({ success: false, error: 'Wallet not found' });

    const task = wallet.tasks.find(t => t.name === taskName);
    if (!task) return res.status(404).json({ success: false, error: 'Task not found' });
    if (task.completed) return res.status(400).json({ success: false, error: 'Task already completed' });

    task.completed = true;
    wallet.totalReward += task.reward;
    await wallet.save();

    res.json({ success: true, wallet, earnedReward: task.reward });
  } catch (err) {
    console.error('❌ Error completing task:', err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// --- Rewards Leaderboard ---
app.get('/api/leaderboard/rewards', async (req, res) => {
  try {
    const wallets = await Wallet.find()
      .sort({ totalReward: -1 })
      .limit(100)
      .select('walletAddress telegramFirstName telegramUsername totalReward friendsReferred');
    res.json({ success: true, wallets });
  } catch (err) {
    console.error('❌ Error:', err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// --- Holders Leaderboard ---
app.get('/api/leaderboard/holders', async (req, res) => {
  try {
    const wallets = await Wallet.find()
      .sort({ totalHoldings: -1 })
      .limit(100)
      .select('walletAddress telegramFirstName telegramUsername totalHoldings');
    res.json({ success: true, wallets });
  } catch (err) {
    console.error('❌ Error:', err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// --- Referral Stats ---
app.get('/api/referral-stats/:walletAddress', async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ walletAddress: req.params.walletAddress });
    if (!wallet) return res.status(404).json({ success: false, error: 'Wallet not found' });
    res.json({ 
      success: true, 
      totalReward: wallet.totalReward, 
      friendsReferred: wallet.friendsReferred, 
      referrals: wallet.referrals 
    });
  } catch (err) {
    console.error('❌ Error:', err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// --- ✅ NEW: Secure Telegram Login with Init Data Validation ---
app.post('/api/telegram-login', async (req, res) => {
  try {
    const { initDataRaw } = req.body;
    
    if (!initDataRaw) {
      return res.status(400).json({ success: false, error: 'Missing initDataRaw' });
    }

    // Validate init data
    const validation = validateInitData(initDataRaw, BOT_TOKEN);
    
    if (!validation.valid) {
      return res.status(403).json({ 
        success: false, 
        error: 'Invalid Telegram data',
        details: validation.error 
      });
    }

    const user = validation.user;
    const telegramId = String(user.id);
    
    let wallet = await Wallet.findOne({ telegramId });
    
    if (!wallet) {
      wallet = new Wallet({
        walletAddress: `tg_${telegramId}`,
        telegramId,
        telegramUsername: user.username,
        telegramFirstName: user.first_name,
        telegramLastName: user.last_name,
        telegramPhotoUrl: user.photo_url,
        tasks: [
          { name: 'Join Telegram', reward: 0.01, completed: true },
          { name: 'On board 2 friends', reward: 0.02, completed: false },
          { name: 'On board 5 friends', reward: 0.05, completed: false },
        ],
        totalReward: 0.01,
        telegramConnected: true
      });
    } else {
      wallet.telegramUsername = user.username || wallet.telegramUsername;
      wallet.telegramFirstName = user.first_name || wallet.telegramFirstName;
      wallet.telegramLastName = user.last_name || wallet.telegramLastName;
      wallet.telegramPhotoUrl = user.photo_url || wallet.telegramPhotoUrl;
      wallet.telegramConnected = true;
    }
    
    await wallet.save();
    
    res.json({ 
      success: true, 
      message: 'Telegram login successful', 
      data: wallet 
    });
  } catch (err) {
    console.error('❌ Error:', err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// --- Mobile Login (fallback for testing) ---
app.post('/api/telegram-login-mobile', async (req, res) => {
  try {
    const { telegramUser } = req.body;
    console.log('📱 Mobile login request:', telegramUser);
    
    if (!telegramUser?.id) return res.status(400).json({ success: false, error: 'Invalid user' });

    const telegramId = telegramUser.id.toString();
    let wallet = await Wallet.findOne({ telegramId });

    if (!wallet) {
      wallet = new Wallet({
        walletAddress: `temp_${telegramId}`,
        telegramId,
        telegramUsername: telegramUser.username,
        telegramFirstName: telegramUser.first_name,
        telegramLastName: telegramUser.last_name,
        telegramPhotoUrl: telegramUser.photo_url,
        tasks: [
          { name: 'Join Telegram', reward: 0.01, completed: true },
          { name: 'On board 2 friends', reward: 0.02, completed: false },
          { name: 'On board 5 friends', reward: 0.05, completed: false },
        ],
        totalReward: 0.01,
        telegramConnected: true
      });
    } else {
      wallet.telegramConnected = true;
    }
    await wallet.save();
    res.json({ success: true, data: wallet });
  } catch (err) {
    console.error('❌ Error:', err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// --- Link Telegram ---
app.post("/api/link-telegram", async (req, res) => {
  try {
    const { walletAddress, telegramData } = req.body;
    if (!walletAddress || !telegramData?.id) return res.status(400).json({ success: false, error: "Missing data" });
    if (!isValidWalletAddress(walletAddress)) return res.status(400).json({ success: false, error: "Invalid address" });

    const telegramId = telegramData.id.toString();
    let wallet = await Wallet.findOne({ telegramId });

    if (wallet) {
      if (wallet.walletAddress.startsWith('temp_')) wallet.walletAddress = walletAddress;
      wallet.telegramConnected = true;
    } else {
      wallet = new Wallet({
        walletAddress,
        telegramId,
        telegramUsername: telegramData.username,
        telegramFirstName: telegramData.first_name,
        tasks: [
          { name: 'Join Telegram', reward: 0.01, completed: true },
          { name: 'On board 2 friends', reward: 0.02, completed: false },
          { name: 'On board 5 friends', reward: 0.05, completed: false },
        ],
        totalReward: 0.01,
        telegramConnected: true
      });
    }

    await wallet.save();
    res.json({ success: true, data: wallet });
  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// --- Current Wallet ---
app.get('/api/current-wallet', async (req, res) => {
  try {
    const wallet = await Wallet.findOne().sort({ connectedAt: -1 });
    res.json(wallet ? { success: true, wallet } : { success: false, message: 'No wallet' });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// --- Referral Join ---
app.post('/api/referral-join', async (req, res) => {
  try {
    const { referrer, telegramId, telegramFirstName, telegramUsername, telegramPhotoUrl } = req.body;
    if (!referrer || !telegramId) return res.status(400).json({ success: false, error: "Missing fields" });

    const existing = await Wallet.findOne({ telegramId });
    if (existing) return res.json({ success: false, error: "Already joined" });

    const newUser = await Wallet.create({
      walletAddress: `ref_${telegramId}`,
      telegramId,
      telegramFirstName,
      telegramUsername,
      telegramPhotoUrl,
      referredBy: referrer,
      tasks: [
        { name: "On board 2 friends", reward: 0.02, completed: false },
        { name: "On board 5 friends", reward: 0.05, completed: false }
      ],
      telegramConnected: true
    });

    const referrerUser = await Wallet.findOne({ walletAddress: referrer });
    if (referrerUser) {
      referrerUser.friendsReferred += 1;
      referrerUser.totalReward += 0.01;
      await referrerUser.save();
    }

    res.json({ success: true, wallet: newUser });
  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// --- Auto Login ---
app.post("/api/auto-login", async (req, res) => {
  try {
    const { telegramId } = req.body;
    if (!telegramId) return res.status(400).json({ success: false, error: "Missing telegramId" });

    const wallet = await Wallet.findOne({ telegramId });
    if (!wallet) return res.json({ success: false, message: "No wallet" });

    res.json({ 
      success: true, 
      walletAddress: wallet.walletAddress, 
      telegram: { firstName: wallet.telegramFirstName, username: wallet.telegramUsername } 
    });
  } catch (err) {
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// --- Health Check ---
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Server running', 
    timestamp: new Date().toISOString(),
    mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

// --- 404 Handler ---
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Not found' });
});

// --- Error Handler ---
app.use((err, req, res, next) => {
  console.error('❌ Error:', err);
  res.status(500).json({ success: false, error: 'Internal error' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
});

export default app;