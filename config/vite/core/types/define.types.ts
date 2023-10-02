import {
  ViteBuildConfigOptions,
  ViteBuildOptions,
} from "./build-options.types";
import { ViteBuildDevServerOptions } from "./dev-server.types";

export type ViteBuildDefineOptions = Pick<ViteBuildConfigOptions, "isDev"> &
  Pick<ViteBuildOptions, "port"> &
  Pick<ViteBuildDevServerOptions, "paths">;
