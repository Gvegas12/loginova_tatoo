import { UserConfigFnObject, loadEnv } from "vite";
import { resolve } from "path";

import {
  ViteBuildOptions,
  vitePlugins,
  viteDevServer,
  viteDefineOptions,
  viteRollupOptions,
} from "./core";

export const viteBuildConfig =
  (): UserConfigFnObject =>
  ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    const { port, paths }: ViteBuildOptions = {
      port: 5173,

      paths: {
        build: resolve("build"),
        api: {
          auth: {
            segment: "/api/v2/auth",
            target: process.env.VITE_API_URL_AUTH,
            rewrite: (path) => path.replace(/\/auth/, ""),
          },
          main: {
            segment: "/api/api/v1",
            target: process.env.VITE_API_URL,
            rewrite: (path) => path.replace(/\/api\/api\/v1/, ""),
          },
        },

        alias: {
          "@": resolve("src"),
        },

        output: {
          css: "assets/css/[name]-[hash][extname]",
          fonts: "assets/fonts/[name]-[hash][extname]",
          images: "assets/images/[name]-[hash][extname]",
        },
      },
    };

    const isDev = mode === "development";

    return {
      build: {
        outDir: paths.build,
        rollupOptions: viteRollupOptions(paths.output),
      },

      resolve: {
        alias: paths.alias,
      },

      server: viteDevServer({
        isDev,
        port,
        paths: paths.api,
      }),

      define: viteDefineOptions({
        isDev,
        port,
        paths: paths.api,
      }),

      test: {
        globals: true,
        environment: "jsdom",
      },

      plugins: vitePlugins(),
    };
  };
