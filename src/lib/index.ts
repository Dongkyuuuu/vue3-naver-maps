import type { App } from "vue";

import {
  NAVER_MAPS_INSTALL_OPTIONS_INJECT_KEY,
  NAVER_MAPS_SCRIPT_ID,
} from "@/constants";
import { NaverMapError } from "@/exceptions";
import type { InitializeOptions } from "@/types";

/** create naver-maps script */
const createScript = (options: InitializeOptions) => {
  const { clientId, category, enableAiMaps, subModules } = options;
  const isScriptExist = document.getElementById(NAVER_MAPS_SCRIPT_ID);
  if (isScriptExist) return;

  const url = new URL("https://oapi.map.naver.com/openapi/v3/maps.js");
  url.searchParams.append(
    // 네이버클라우드 상편 개편으로 인한 호출 API 변경
    // V5 부터 ncpKeyId가 기본값으로 변경
    // https://github.com/Dongkyuuuu/vue3-naver-maps/issues/28
    enableAiMaps ? `${category ?? "ncp"}ClientId` : "ncpKeyId",
    clientId,
  );
  if (subModules && Array.isArray(subModules)) {
    url.searchParams.append("submodules", subModules.join());
  }

  const script = document.createElement("script");
  script.setAttribute("id", NAVER_MAPS_SCRIPT_ID);
  script.setAttribute("type", "text/javascript");
  script.setAttribute("src", url.toString());
  script.setAttribute("async", "");
  script.setAttribute("defer", "");

  script.onerror = () => new NaverMapError("Failed to load Naver Maps script");

  document.head.appendChild(script);
};

/** Setup vue3-naver-maps */
export const setup = (app: App, options: InitializeOptions) => {
  if (!options.clientId) {
    throw new Error("clientId is required");
  }

  createScript(options);
  app.provide(NAVER_MAPS_INSTALL_OPTIONS_INJECT_KEY, options);
};
