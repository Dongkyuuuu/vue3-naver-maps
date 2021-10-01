import { InjectionKey, Ref } from "vue";
import { naverV3 } from "./index";

export const naverMapObject: InjectionKey<Ref<naver.maps.Map | null>> = Symbol(
  "[vue3-naver-maps]naverMapObject"
);

export const isSSR: InjectionKey<boolean> = Symbol("[vue3-naver-maps]IS_SSR");

export const installOptions: InjectionKey<naverV3.install.options> = Symbol(
  "[vue3-naver-maps]install-options"
);
