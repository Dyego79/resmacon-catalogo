import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  //base: "/catalogo/",
  /* build: {
    sourcemap: false,
  }, */
  plugins: [react()],
});
