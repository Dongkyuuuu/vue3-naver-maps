import { App } from "vue";
import qs from "qs";
import { MAPS_IS_SSR, MAPS_INSTALL_OPTIONS } from "./keys";

export interface Options {
  clientId: string;
  category?: "gov" | "ncp" | "fin";
  subModules?: string;
}

const ERROR_NONE_CLIENT_ID = "options must be included clientId";
export const NAVER_MAP_ELEMENT_ID = "vue3-naver-maps";

class Installer {
  install(app: App, options: Options) {
    const MODE = typeof window === "undefined"; // true: SSR, false: client
    if (!options.clientId) throw new Error(ERROR_NONE_CLIENT_ID);

    app.provide(MAPS_IS_SSR, MODE);
    app.provide(MAPS_INSTALL_OPTIONS, options);

    !MODE && this.createScript(options);
  }
  // For Server-Side-Render, create script in Map component
  // this function is called client-side only
  ssrInstall(options: Options) {
    const MODE = typeof window === "undefined"; // true: SSR, false: client
    if (!options.clientId) throw new Error(ERROR_NONE_CLIENT_ID);
    if (MODE) return; // if it called server-side, ignored it

    this.createScript(options);
  }

  private createScript(options: Options) {
    const isExist = document.getElementById(NAVER_MAP_ELEMENT_ID);

    if (isExist) return;
    const script = document.createElement("script");
    const url = this.getNaverMapUrl(options);

    script.setAttribute("id", NAVER_MAP_ELEMENT_ID);
    script.setAttribute("src", url);
    script.setAttribute("async", "");
    script.setAttribute("defer", "");
    script.onerror = () => {
      new Error(`[vue3-naver-maps] Failed to load`);
    };
    document.head.appendChild(script);
  }
  private getNaverMapUrl(options: Options) {
    const url = `https://openapi.map.naver.com/openapi/v3/maps.js?${
      options.category || "ncp"
    }`;
    const query = qs.stringify({
      ClientId: options.clientId,
      SubModules: options.subModules ?? "",
    });
    return url + query;
  }
}

export default new Installer();
