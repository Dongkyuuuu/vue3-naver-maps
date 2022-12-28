import type { InjectionKey } from "vue";
import type { Options } from "@/types";

/** NaverMap install options */
export const NAVER_MAPS_INSTALL_OPTIONS: InjectionKey<Options> = Symbol(
  "vue3-naver-maps-install-options"
);
