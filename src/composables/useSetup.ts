import { inject } from "vue";
import { useGetApiUrl } from "./useGetApiUrl";
import { NAVER_MAPS_INSTALL_OPTIONS } from "@/constants/keys";
import { NAVER_MAP_SCRIPT_ID } from "@/constants/ids";
import { ERROR_NONE_CLIENT_ID, ERROR_SCRIPT_LOAD } from "@/constants/errors";

import type { App } from "vue";
import type { Options } from "@/types";

/** Setup nvermaps script */
export const useSetupScript = (initMap: () => void) => {
  const isExistScript = document.getElementById(NAVER_MAP_SCRIPT_ID);
  if (isExistScript) return;

  const options = inject(NAVER_MAPS_INSTALL_OPTIONS)!;
  const url = useGetApiUrl(options);
  const script = document.createElement("script");
  script.setAttribute("id", NAVER_MAP_SCRIPT_ID);
  script.setAttribute("type", "text/javascript");
  script.setAttribute("src", url);
  script.setAttribute("async", "");
  script.setAttribute("defer", "");

  script.onerror = () => new Error(ERROR_SCRIPT_LOAD);
  script.onload = () => {
    window.naver.maps.onJsContentLoaded = () => initMap();
  };
};

export default function setup(app: App, options: Options) {
  if (!options.clientId) throw new Error(ERROR_NONE_CLIENT_ID);

  app.provide(NAVER_MAPS_INSTALL_OPTIONS, options);
}
