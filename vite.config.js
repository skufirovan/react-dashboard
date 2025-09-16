import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  resolve: {
    alias: {
      "@app": resolve(__dirname, "src/app"),
      "@pages": resolve(__dirname, "src/pages"),
      "@shared": resolve(__dirname, "src/shared"),
      "@widgets": resolve(__dirname, "src/widgets"),
    },
  },
});
