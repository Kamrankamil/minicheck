import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import svgr from "vite-plugin-svgr";
import { constants } from "zlib";

// Helper to keep all emitted files under dist/assets with predictable names
const rollupOutput = {
  entryFileNames: "assets/[name]-[hash].js",
  chunkFileNames: "assets/[name]-[hash].js",
  assetFileNames: (assetInfo: { name?: string }) => {
    return "assets/[name]-[hash][extname]";
  },
};

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    svgr(),

    // Brotli compression (.br)
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 1024,
      compressionOptions: {
        params: { [constants.BROTLI_PARAM_QUALITY]: 11 },
      },
      deleteOriginFile: false,
      filter: /\.(js|css|html|svg)$/i,
      verbose: false,
    }),

    // Gzip compression (.gz) fallback
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 1024,
      deleteOriginFile: false,
      filter: /\.(js|css|html|svg)$/i,
      verbose: false,
    }),
  ],

  build: {
    outDir: "dist",
    assetsDir: "assets",
    target: "es2020",
    sourcemap: true, // ✅ Enable for debugging mobile issues
    cssCodeSplit: true,
    assetsInlineLimit: 4096, // ✅ Changed to 4KB for better balance
    chunkSizeWarningLimit: 1000,
    minify: "esbuild",

    rollupOptions: {
      output: rollupOutput,
    },

    commonjsOptions: { 
      transformMixedEsModules: true 
    },
  },

  esbuild: { 
    drop: process.env.NODE_ENV === 'production' ? ["console", "debugger"] : [], // ✅ Keep logs in dev
  },

  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true, // ✅ Fail if port is in use
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'token.buycex.com',
      'minicheck.vercel.app', // ✅ Add your Vercel domain
      '.ngrok-free.dev',
      'arkansas-saint-fellowship-chip.trycloudflare.com',
    ],
    // ✅ Add CORS headers for development
    cors: true,
    // ✅ Proxy if needed
    proxy: {
      '/api': {
        target: process.env.VITE_BACKEND_URL || 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },

  // ✅ Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom',  '@twa-dev/sdk' ],
    exclude: ['@twa-dev/sdk'], // ✅ Don't pre-bundle Telegram SDK
  },

  // ✅ Define global constants
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  },
});