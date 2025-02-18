import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        food: resolve(__dirname, "src/food/index.html"),
        listing: resolve(__dirname, "src/search_listing/index.html")
      },
    },
  },
});
