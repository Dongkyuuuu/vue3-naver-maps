import { inject } from "vue";

import { NAVER_MAPS_INSTALL_OPTIONS_INJECT_KEY } from "@/constants";
import { NaverMapError } from "@/exceptions";

/** Get vue3-naver-maps global options */
export const useGlobalNaverMapOptions = () => {
  const options = inject(NAVER_MAPS_INSTALL_OPTIONS_INJECT_KEY);

  if (!options) {
    throw new NaverMapError("Global Options Not Found");
  }

  return options;
};
