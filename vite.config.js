import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        content: "src/content.js",
      },
      output: {
        entryFileNames: "[name].js", // ensures content.js remains named correctly
      },
    },
  },
});
