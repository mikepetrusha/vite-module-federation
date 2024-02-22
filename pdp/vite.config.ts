import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "pdp",
      filename: "remoteEntry.js",
      remotes: {
        home: "http://localhost:5001/assets/remoteEntry.js",
        pdp: "http://localhost:5002/assets/remoteEntry.js",
      },
      exposes: {
        "./PDPContent": "./src/components/PDPContent",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
