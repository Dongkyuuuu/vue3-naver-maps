import { ref } from "vue";
import type { Ref } from "vue";

export type MapsCallback = (map: naver.maps.Map) => void;

// NaverMap Instance
export const mapInstance: Ref<naver.maps.Map | null> = ref(null);
// if naver object called before init map, object is push this array
export const mapsCallbackList: Ref<MapsCallback[]> = ref([]);
