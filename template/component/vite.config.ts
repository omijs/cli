import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "index",
      formats: ["es", "umd"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: /^omi/,
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "h.f",
  },
});
