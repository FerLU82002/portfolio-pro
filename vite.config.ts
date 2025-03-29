import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: '/portfolio-pro/', // 🔥 
  plugins: [tailwindcss()],
  build: {
    outDir: 'dist',       // 📦 
    emptyOutDir: true,    // 🧹 
    sourcemap: true       // 🗺️ 
  }
});