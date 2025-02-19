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
        listing: resolve(__dirname, "src/search_listing/index.html"),
        mealsSugestor: resolve(__dirname, "src/mealsSugestor/index.html"),
        meal: resolve(__dirname, "src/meal/index.html"),
        dri: resolve(__dirname, "src/dri/index.html"),

      },
    },
  },
});
