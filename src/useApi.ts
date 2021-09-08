import { inject } from "vue";
import { useMapkey } from "./injectionKeys";

export function useMap() {
  return inject(useMapkey)!;
}
