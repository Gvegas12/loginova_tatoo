import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
// import { viteStaticCopy } from "vite-plugin-static-copy";

export const vitePlugins = () => [
  react(),
  svgr({ svgrOptions: { exportType: "default" } }),
];
