import { ProxyOptions } from "vite";
import { ViteBuildDefineOptions, ViteBuildDevServerPaths } from "./types";

export const viteDefineOptions = ({
  isDev,
  port,
  paths: { auth, main },
}: ViteBuildDefineOptions) => {
  const getUrl = (
    segment: ViteBuildDevServerPaths["segment"],
    target: ProxyOptions["target"]
  ) =>
    isDev
      ? JSON.stringify(`http://localhost:${port}${segment}`)
      : JSON.stringify(target);

  return {
    __AUTH_API_URL__: getUrl(auth.segment, auth.target),
    __API_URL__: getUrl(main.segment, main.target),
    __IS_DEV__: isDev,
  };
};
