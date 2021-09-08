import { InjectionKey, Ref } from "vue";
import type { useMap } from "./types";

export const naverMapObject: InjectionKey<Ref<naver.maps.Map | null>> = Symbol(
  "[vue3-naver-maps]naverMapObject"
);
export const useMapkey: InjectionKey<useMap> = Symbol(
  "[vue3-naver-maps]useMap"
);
