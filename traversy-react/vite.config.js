import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // Configured to help API fetch 
    // Creating a placeholder or variable for the API link
    // So on subsequest API requests '/api is used instead of the API link'
    proxy: {
      "/api": {
        target: "http://localhost:8000", // Api link
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
