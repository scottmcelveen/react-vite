import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const isLocal = !process.env.VERCEL;

const httpsConfig = isLocal
  ? {
      key: fs.readFileSync("../localhost+2-key.pem"),
      cert: fs.readFileSync("../localhost+2.pem"),
    }
  : undefined;

const proxyConfig = isLocal
  ? {
      "/api": {
        target: process.env.VITE_APP_BACKEND_HOST,
        changeOrigin: true,
      },
    }
  : undefined;

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    devtools(),
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    https: httpsConfig,
    proxy: proxyConfig,
  },
});
