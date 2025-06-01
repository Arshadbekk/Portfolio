import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "https://github.com/Arshadbekk/portfolio.git",
  plugins: [react()],
});
