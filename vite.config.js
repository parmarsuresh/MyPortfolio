import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],

  // Use root path in dev, repo path only in build
  base: command === "serve" ? "/" : "/MyPortfolio/",

  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
}));
