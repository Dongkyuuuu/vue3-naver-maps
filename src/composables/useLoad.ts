import { mapIsLoaded, mapCallbackList, mapInstance } from "@/stores";

export const useLoad = (action: (map: naver.maps.Map) => void) => {
  mapIsLoaded.value
    ? action(mapInstance.value!)
    : mapCallbackList.value.push(action);
};
