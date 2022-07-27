import type { InjectionKey, ComputedRef } from "vue";
import type { Options } from "./installer";

export const MAPS_IS_SSR: InjectionKey<boolean> = Symbol("NAVER_MAP_IS_SSR");
export const MAPS_INSTALL_OPTIONS: InjectionKey<Options> = Symbol(
  "NAVER_MAP_INSTALL_OPTIONS"
);
export const MAPS_INSTANCE: InjectionKey<ComputedRef<naver.maps.Map>> =
  Symbol("NAVER_MAP_INSTANCE");
