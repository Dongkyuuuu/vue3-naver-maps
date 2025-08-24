import { inject } from "vue";

import { NAVER_MAPS_INSTANCE_INJECT_KEY } from "@/constants";
import { NaverMapError } from "@/exceptions";

/** Get vue3-naver-maps instance */
export const useNaverMapInstance = () => {
  const options = inject(NAVER_MAPS_INSTANCE_INJECT_KEY);

  if (!options) {
    throw new NaverMapError("Naver Map Instance Options Not Found");
  }

  return options;
};
