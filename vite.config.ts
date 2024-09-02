import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // base: './',
  plugins: [react()],
  'server': {
    'port': 3000,
    open: true
  },
  resolve: {
    alias: {
      "@learning/*": path.resolve(__dirname, "learning"),
      "@components/*": path.resolve(__dirname, "components"),
    }
  }
})
