import { App } from "vue";
import qs from "qs";
import { MAPS_IS_SSR, MAPS_INSTALL_OPTIONS } from "./keys";

export interface Options {
  clientId: string;
  category?: "gov" | "ncp" | "fin";
  subModules?: string;
}

class Installer {
  install(app: App, options: Options) {
    const MODE = this.mode; // true: SSR, false: client
    if (!options.clientId) throw new Error("options must be included clientId");

    app.provide(MAPS_IS_SSR, MODE);
    app.provide(MAPS_INSTALL_OPTIONS, options);

    !MODE && this.createScript(options);
  }
  createScript(options: Options) {
    const ELEMENT_ID = "vue3-naver-maps";
    const isExist = document.getElementById(ELEMENT_ID);

    if (isExist) return;
    const script = document.createElement("script");
    const url = this.getNaverMapUrl(options);

    script.setAttribute("id", ELEMENT_ID);
    script.setAttribute("src", url);
    script.setAttribute("async", "");
    script.setAttribute("defer", "");
    script.onerror = () => {
      new Error(`[vue3-naver-maps] Failed to load`);
    };
    document.head.appendChild(script);
  }

  private getNaverMapUrl(options: Options) {
    const CATEGOEY = options.category || "ncp";
    const url = `https://openapi.map.naver.com/openapi/v3/maps.js?${CATEGOEY}`;
    const query = qs.stringify({
      ClientId: options.clientId,
      SubModules: options.subModules ?? "",
    });
    return url + query;
  }

  private get mode() {
    return typeof window === "undefined";
  }
}

export default new Installer();
