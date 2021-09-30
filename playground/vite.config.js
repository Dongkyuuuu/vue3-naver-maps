import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import analyze from "rollup-plugin-analyzer";
import path, { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: resolve(process.cwd(), "playground"),
  hmr: { overlay: false },
  build: {
    outDir: "../playground_dist",
    rollupOptions: {
      plugins: [analyze()],
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "vue3-naver-maps": path.resolve(
        __dirname,
        "../dist/vue3-naver-maps.esm.js"
      ),
    },
  },
});
