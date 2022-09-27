import { App } from "vue";
import { MAPS_IS_SSR, MAPS_INSTALL_OPTIONS } from "./keys";

export interface Options {
  clientId: string;
  category?: "gov" | "ncp" | "fin";
  subModules?: string;
}

const ERROR_NONE_CLIENT_ID = "options must be included clientId";
export const NAVER_MAP_ELEMENT_ID = "vue3-naver-maps";

// Create navermap URL
const getNaverMapUrl = (options: Options) => {
  const category = options.category || "ncp";
  const clientId = options.clientId;
  const subModules = options.subModules || "";
  const url = `https://openapi.map.naver.com/openapi/v3/maps.js?${category}ClientId=${clientId}&subModules=${subModules}`;
  return url;
};

// Create navermaps script tag
export const createScript = (options: Options) => {
  if (typeof document == "undefined") return;
  const isExist = document.getElementById(NAVER_MAP_ELEMENT_ID);

  if (isExist) return;
  const script = document.createElement("script");
  const url = getNaverMapUrl(options);

  script.setAttribute("id", NAVER_MAP_ELEMENT_ID);
  script.setAttribute("src", url);
  script.setAttribute("async", "");
  script.setAttribute("defer", "");
  script.onerror = () => {
    new Error(`[vue3-naver-maps] Failed to load`);
  };
  document.head.appendChild(script);
};

export const installer = (app: App, options: Options) => {
  const MODE = typeof window == "undefined"; // true: SSR, false: client
  if (!options.clientId) throw new Error(ERROR_NONE_CLIENT_ID);

  app.provide(MAPS_IS_SSR, MODE);
  app.provide(MAPS_INSTALL_OPTIONS, options);

  !MODE && createScript(options);
};
