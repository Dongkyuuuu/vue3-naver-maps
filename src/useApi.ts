import { inject, InjectionKey } from "vue";
import type { useMap as useMapType } from "./apis";

export function useMap() {
  const mapSymbol: InjectionKey<useMapType> = Symbol("[vue3-naver-maps]useMap");
  return inject(mapSymbol);
}
