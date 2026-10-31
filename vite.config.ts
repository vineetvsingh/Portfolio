import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Served from https://vineetvsingh.github.io/Portfolio/
  base: "/Portfolio/",
  plugins: [react(), tailwindcss()],
});
