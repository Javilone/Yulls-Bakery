import { resolve } from "path";

export default {
  root: resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        tartafloral: resolve(__dirname, "src/html/tartafloral.html"),
      },
    },
  },
  server: {
    port: 8080,
  },
};
