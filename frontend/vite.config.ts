import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import environment from "vite-plugin-environment";
import path from "node:path";

process.env.II_URL =
  process.env.DFX_NETWORK === "local"
    ? `http://${process.env.CANISTER_ID_INTERNET_IDENTITY}.localhost:4943`
    : `https://identity.ic0.app`;

export default defineConfig({
  plugins: [
    react(),
    environment("all", { prefix: "CANISTER_" }),
    environment("all", { prefix: "DFX_" }),
    environment(["II_URL"]),
  ],
  envDir: "../",
  define: {
    "process.env": process.env,
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "declarations",
        replacement: fileURLToPath(
          new URL("../src/declarations", import.meta.url)
        ),
      },
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src"),
      },
    ],
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:4943",
        changeOrigin: true,
      },
    },
    host: "127.0.0.1",
  },
});
