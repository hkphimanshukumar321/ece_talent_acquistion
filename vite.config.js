import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages: repo name is ece_talent_acquistion
export default defineConfig({
  plugins: [react()],
  base: "/ece_talent_acquistion/",
});
