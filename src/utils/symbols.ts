import { InjectionKey, Ref } from "vue";

export const naverMapObject: InjectionKey<Ref<naver.maps.Map | null>> = Symbol(
  "[vue3-naver-maps]-mapObject"
);
