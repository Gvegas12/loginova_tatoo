import { BuildOptions } from "vite";

import { ViteBuildOptions } from "./types";

export const viteRollupOptions = ({
  css,
  fonts,
  images,
}: ViteBuildOptions["paths"]["output"]): BuildOptions["rollupOptions"] => ({
  output: {
    assetFileNames: ({ name }) => {
      if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
        return images;
      }

      if (/\.(ttf|otf|fnt|woff?2)$/.test(name ?? "")) {
        return fonts;
      }

      if (/\.css$/.test(name ?? "")) {
        return css;
      }

      return "assets/[name]-[hash][extname]";
    },
  },
});
