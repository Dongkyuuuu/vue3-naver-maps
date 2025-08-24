import { ref } from "vue";

import type { InitCallBacks } from "@/types";

export const mapInstance = ref<naver.maps.Map>();
export const mapIsLoaded = ref<boolean>(false);
export const mapCallbackList = ref<InitCallBacks>([]);
