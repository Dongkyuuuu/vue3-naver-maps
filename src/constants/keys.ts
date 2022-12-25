import type { InjectionKey } from "vue";
import type { Options, InitCallBacks } from "@/types";

export const NAVER_MAPS_INIT_CALLBACK: InjectionKey<InitCallBacks> = Symbol(
  "vue3-naver-maps-init-callbacks"
);
/** NaverMap Instace */
export const NAVER_MAPS_INSTANCE: InjectionKey<naver.maps.Map> = Symbol(
  "veu3-naver-maps-map-instance"
);
/** NaverMap install options */
export const NAVER_MAPS_INSTALL_OPTIONS: InjectionKey<Options> = Symbol(
  "vue3-naver-maps-install-options"
);
