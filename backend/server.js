import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import crypto from 'crypto';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';

dotenv.config();

const app = express();

// ✅ Single CORS configuration
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
    if (!origin) return cb(null, true); // allow curl/postman
    try {
      const ok = whitelist.includes(origin) ||
                 /\.ngrok-free\.dev$/i.test(new URL(origin).hostname);
      return ok ? cb(null, true) : cb(new Error('Not allowed by CORS'));
    } catch {
      return cb(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 204
}));

app.use(express.json());

// ✅ Rate limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: { success: false, error: 'Too many requests, please try again later.' }
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
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// --- Task Schema ---
const TaskSchema = new mongoose.Schema({
  name: String,
  reward: Number,
  completed: { type: Boolean, default: false }
});

// --- Wallet Schema ---
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

// ✅ Add indexes for performance
WalletSchema.index({ telegramId: 1 });
WalletSchema.index({ walletAddress: 1 });
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

// --- Add / Update Wallet (with referral logic) ---
app.post('/api/wallet', async (req, res) => {
  try {
    const { walletAddress, referrer } = req.body;
    
    if (!walletAddress) {
      return res.status(400).json({ 
        success: false, 
        error: 'Wallet address required' 
      });
    }

    if (!isValidWalletAddress(walletAddress)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid wallet address format' 
      });
    }

    const defaultTasks = [
      { name: 'Join Telegram', reward: 0.01, completed: false },
      { name: 'On board 2 friends', reward: 0.02, completed: false },
      { name: 'On board 5 friends', reward: 0.05, completed: false },
    ];

    let wallet = await Wallet.findOne({ walletAddress });

    if (!wallet) {
      wallet = new Wallet({
        walletAddress,
        tasks: defaultTasks,
        referredBy: referrer || null,
      });
      await wallet.save();

      // Handle referrer updates
      if (referrer && isValidWalletAddress(referrer)) {
        const referrerWallet = await Wallet.findOne({ walletAddress: referrer });
        if (referrerWallet && !referrerWallet.referrals.includes(walletAddress)) {
          referrerWallet.friendsReferred += 1;
          referrerWallet.referrals.push(walletAddress);
          referrerWallet.totalReward += 0.01;

          for (const task of referrerWallet.tasks) {
            if (!task.completed) {
              if (
                (task.name === "On board 2 friends" && referrerWallet.friendsReferred >= 2) ||
                (task.name === "On board 5 friends" && referrerWallet.friendsReferred >= 5)
              ) {
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
    res.status(500).json({ 
      success: false, 
      error: 'Server error',
      message: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
});

// --- Mark a Task Completed ---
app.post('/api/complete-task', async (req, res) => {
  try {
    const { walletAddress, taskName } = req.body;
    
    if (!walletAddress || !taskName) {
      return res.status(400).json({ 
        success: false, 
        error: 'Wallet address and task name required' 
      });
    }

    const wallet = await Wallet.findOne({ walletAddress });
    if (!wallet) {
      return res.status(404).json({ 
        success: false, 
        error: 'Wallet not found' 
      });
    }

    const task = wallet.tasks.find(t => t.name === taskName);
    if (!task) {
      return res.status(404).json({ 
        success: false, 
        error: 'Task not found' 
      });
    }
    
    if (task.completed) {
      return res.status(400).json({ 
        success: false, 
        error: 'Task already completed' 
      });
    }

    task.completed = true;
    wallet.totalReward += task.reward;
    await wallet.save();

    res.json({ success: true, wallet, earnedReward: task.reward });
  } catch (err) {
    console.error('❌ Error completing task:', err);
    res.status(500).json({ 
      success: false, 
      error: 'Server error' 
    });
  }
});

// --- Get Leaderboard ---
app.get('/api/leaderboard/rewards', async (req, res) => {
  try {
    const wallets = await Wallet.find()
      .sort({ totalReward: -1 })
      .limit(100)
      .select('walletAddress telegramFirstName telegramUsername totalReward friendsReferred');
    
    res.json({ success: true, wallets });
  } catch (err) {
    console.error('❌ Error fetching rewards leaderboard:', err);
    res.status(500).json({ 
      success: false, 
      error: 'Server error' 
    });
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
    console.error('❌ Error fetching holders leaderboard:', err);
    res.status(500).json({ 
      success: false, 
      error: 'Server error' 
    });
  }
});

// --- Get Referral Stats for a User ---
app.get('/api/referral-stats/:walletAddress', async (req, res) => {
  try {
    const { walletAddress } = req.params;
    
    if (!walletAddress) {
      return res.status(400).json({ 
        success: false, 
        error: 'Wallet address required' 
      });
    }

    const wallet = await Wallet.findOne({ walletAddress });
    if (!wallet) {
      return res.status(404).json({ 
        success: false, 
        error: 'Wallet not found' 
      });
    }

    res.json({
      success: true,
      totalReward: wallet.totalReward,
      friendsReferred: wallet.friendsReferred,
      referrals: wallet.referrals
    });
  } catch (err) {
    console.error('❌ Error fetching referral stats:', err);
    res.status(500).json({ 
      success: false, 
      error: 'Server error' 
    });
  }
});

// --- Telegram Login (with hash validation) ---
app.post('/api/telegram-login', async (req, res) => {
  try {
    const { initData } = req.body;
    if (!initData || typeof initData !== 'string') {
      return res.status(400).json({ success: false, error: 'Missing initData string' });
    }

    // Use raw initData, URLSearchParams will decode percent-encoding itself
    const params = new URLSearchParams(initData);

    // Build data_check_string from RAW values (as Telegram sent them)
    const entries = [];
    for (const [key, value] of params.entries()) {
      if (key !== 'hash') entries.push([key, value]);
    }
    entries.sort((a, b) => a[0].localeCompare(b[0]));
    const dataCheckString = entries.map(([k, v]) => `${k}=${v}`).join('\n');

    // Verify HMAC
    const secretKey = crypto.createHash('sha256').update(process.env.TELEGRAM_BOT_TOKEN).digest();
    const hmac = crypto.createHmac('sha256', secretKey).update(dataCheckString).digest('hex');
    const hash = params.get('hash');
    if (hmac !== hash) {
      return res.status(403).json({ success: false, error: 'Invalid Telegram login data' });
    }

    // Parse user AFTER verification
    const userStr = params.get('user');
    const user = userStr ? JSON.parse(userStr) : null;
    if (!user?.id) return res.status(400).json({ success: false, error: 'Invalid Telegram user data' });

    const telegramId = String(user.id);
    let wallet = await Wallet.findOne({ telegramId });
    if (!wallet) {
      wallet = new Wallet({
        walletAddress: `tg_${telegramId}`,
        telegramId,
        telegramUsername: user.username || null,
        telegramFirstName: user.first_name || null,
        telegramLastName: user.last_name || null,
        telegramPhotoUrl: user.photo_url || null,
        tasks: [
          { name: 'Join Telegram', reward: 0.01, completed: true },
          { name: 'On board 2 friends', reward: 0.02, completed: false },
          { name: 'On board 5 friends', reward: 0.05, completed: false },
        ],
        totalReward: 0.01,
        telegramConnected: true,
      });
    } else {
      wallet.telegramUsername = user.username || wallet.telegramUsername;
      wallet.telegramFirstName = user.first_name || wallet.telegramFirstName;
      wallet.telegramLastName = user.last_name || wallet.telegramLastName;
      wallet.telegramPhotoUrl = user.photo_url || wallet.telegramPhotoUrl;
      wallet.telegramConnected = true;
    }
    await wallet.save();

    res.json({ success: true, message: 'Telegram login successful', data: wallet });
  } catch (err) {
    console.error('telegram-login error', err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// --- ✅ Mobile Telegram Login (no hash validation) ---
app.post('/api/telegram-login-mobile', async (req, res) => {
  try {
    const { telegramUser } = req.body;
    
    console.log('📱 Mobile login request:', telegramUser);
    
    if (!telegramUser?.id) {
      return res.status(400).json({ 
        success: false, 
        error: 'Invalid user data' 
      });
    }

    const telegramId = telegramUser.id.toString();
    
    let wallet = await Wallet.findOne({ telegramId });

    if (!wallet) {
      console.log('✅ Creating new wallet for Telegram user:', telegramId);
      wallet = new Wallet({
        walletAddress: `temp_${telegramId}`,
        telegramId,
        telegramUsername: telegramUser.username || null,
        telegramFirstName: telegramUser.first_name || null,
        telegramLastName: telegramUser.last_name || null,
        telegramPhotoUrl: telegramUser.photo_url || null,
        tasks: [
          { name: 'Join Telegram', reward: 0.01, completed: true },
          { name: 'On board 2 friends', reward: 0.02, completed: false },
          { name: 'On board 5 friends', reward: 0.05, completed: false },
        ],
        totalReward: 0.01,
        telegramConnected: true
      });
    } else {
      console.log('✅ Updating existing wallet for Telegram user:', telegramId);
      wallet.telegramUsername = telegramUser.username || wallet.telegramUsername;
      wallet.telegramFirstName = telegramUser.first_name || wallet.telegramFirstName;
      wallet.telegramLastName = telegramUser.last_name || wallet.telegramLastName;
      wallet.telegramPhotoUrl = telegramUser.photo_url || wallet.telegramPhotoUrl;
      wallet.telegramConnected = true;
    }

    await wallet.save();

    res.json({
      success: true,
      message: 'Mobile login successful',
      data: wallet
    });
  } catch (err) {
    console.error('❌ Mobile login error:', err);
    res.status(500).json({ 
      success: false, 
      error: 'Server error' 
    });
  }
});

// --- Link Telegram to existing wallet ---
app.post("/api/link-telegram", async (req, res) => {
  try {
    const { walletAddress, telegramData } = req.body;

    if (!walletAddress || !telegramData?.id) {
      return res.status(400).json({ 
        success: false, 
        error: "Missing wallet or Telegram data" 
      });
    }

    if (!isValidWalletAddress(walletAddress)) {
      return res.status(400).json({ 
        success: false, 
        error: "Invalid wallet address format" 
      });
    }

    const telegramId = telegramData.id.toString();

    // Find wallet by Telegram ID
    let wallet = await Wallet.findOne({ telegramId });

    if (wallet) {
      // Update wallet address if it was temporary
      if (wallet.walletAddress.startsWith('temp_')) {
        wallet.walletAddress = walletAddress;
        console.log('✅ Updated temporary wallet to real address:', walletAddress);
      }
      
      // Update Telegram data
      wallet.telegramUsername = telegramData.username || wallet.telegramUsername;
      wallet.telegramFirstName = telegramData.first_name || wallet.telegramFirstName;
      wallet.telegramLastName = telegramData.last_name || wallet.telegramLastName;
      wallet.telegramPhotoUrl = telegramData.photo_url || wallet.telegramPhotoUrl;
      wallet.telegramConnected = true;
    } else {
      // Create new wallet if doesn't exist
      console.log('✅ Creating new wallet with address:', walletAddress);
      wallet = new Wallet({
        walletAddress,
        telegramId,
        telegramUsername: telegramData.username || null,
        telegramFirstName: telegramData.first_name || null,
        telegramLastName: telegramData.last_name || null,
        telegramPhotoUrl: telegramData.photo_url || null,
        tasks: [
          { name: 'Join Telegram', reward: 0.01, completed: true },
          { name: 'On board 2 friends', reward: 0.02, completed: false },
          { name: 'On board 5 friends', reward: 0.05, completed: false },
        ],
        totalReward: 0.01,
        telegramConnected: true
      });
    }

    // Mark "Join Telegram" completed
    const joinTask = wallet.tasks.find(t => t.name === "Join Telegram");
    if (joinTask && !joinTask.completed) {
      joinTask.completed = true;
      wallet.totalReward += joinTask.reward;
    }

    await wallet.save();

    res.json({ success: true, data: wallet });
  } catch (err) {
    console.error("❌ Error linking Telegram:", err);
    res.status(500).json({ 
      success: false, 
      error: "Server error" 
    });
  }
});

// --- Get currently connected wallet ---
app.get('/api/current-wallet', async (req, res) => {
  try {
    const wallet = await Wallet.findOne().sort({ connectedAt: -1 });
    if (!wallet) {
      return res.json({ 
        success: false, 
        message: 'No wallet connected yet' 
      });
    }
    res.json({ success: true, wallet });
  } catch (err) {
    console.error('❌ Error fetching current wallet:', err);
    res.status(500).json({ 
      success: false, 
      error: 'Server error' 
    });
  }
});

// --- Referral Join ---
app.post('/api/referral-join', async (req, res) => {
  try {
    const { referrer, telegramId, telegramFirstName, telegramUsername, telegramPhotoUrl } = req.body;

    if (!referrer || !telegramId) {
      return res.status(400).json({ 
        success: false, 
        error: "Missing required fields" 
      });
    }

    const existing = await Wallet.findOne({ telegramId });
    if (existing) {
      return res.json({ 
        success: false, 
        error: "Already joined" 
      });
    }

    const newUser = await Wallet.create({
      walletAddress: `ref_${telegramId}`,
      telegramId,
      telegramFirstName,
      telegramUsername,
      telegramPhotoUrl,
      referredBy: referrer,
      connectedAt: new Date(),
      tasks: [
        { name: "On board 2 friends", reward: 0.02, completed: false },
        { name: "On board 5 friends", reward: 0.05, completed: false },
        { name: "On board 10 friends", reward: 0.1, completed: false }
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
    console.error("❌ Referral join error:", err);
    res.status(500).json({ 
      success: false, 
      error: "Server error" 
    });
  }
});

// --- Auto-login: find wallet by Telegram ID ---
app.post("/api/auto-login", async (req, res) => {
  try {
    const { telegramId } = req.body;
    
    if (!telegramId) {
      return res.status(400).json({ 
        success: false, 
        error: "Missing telegramId" 
      });
    }

    const wallet = await Wallet.findOne({ telegramId });
    if (!wallet) {
      return res.json({ 
        success: false, 
        message: "No linked wallet found" 
      });
    }

    res.json({
      success: true,
      walletAddress: wallet.walletAddress,
      telegram: {
        firstName: wallet.telegramFirstName,
        username: wallet.telegramUsername,
      },
    });
  } catch (err) {
    console.error("❌ Auto-login error:", err);
    res.status(500).json({ 
      success: false, 
      error: "Server error" 
    });
  }
});

// ✅ Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// ✅ 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    error: 'Endpoint not found' 
  });
});

// ✅ Global error handler
app.use((err, req, res, next) => {
  console.error('❌ Unhandled error:', err);
  res.status(500).json({ 
    success: false, 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
});