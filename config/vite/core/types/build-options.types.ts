import { AliasOptions } from "vite";
import { ViteBuildDevServerOptions } from "./dev-server.types";

export type ViteBuildOptions = {
  port: number;
  paths: {
    build: string;
    api: ViteBuildDevServerOptions["paths"];
    alias: AliasOptions;
    output: {
      images: string;
      fonts: string;
      css: string;
    };
  };
};

export type ViteBuildConfigOptions = {
  isDev: boolean;
};
