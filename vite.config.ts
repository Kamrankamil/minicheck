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
    sourcemap: true,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
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
    drop: process.env.NODE_ENV === 'production' ? ["console", "debugger"] : [],
  },

  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'token.buycex.com',
      'minicheck.vercel.app',
      '.ngrok-free.dev',
      'arkansas-saint-fellowship-chip.trycloudflare.com',
    ],
    cors: true,
    proxy: {
      '/api': {
        target: process.env.VITE_BACKEND_URL || 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },

  // ✅ FIXED: Include @twa-dev/sdk for proper bundling
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      '@twa-dev/sdk'  // ✅ Added this
    ],
  },

  // ✅ Define global constants
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  },
});