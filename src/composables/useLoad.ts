import { mapInstance, mapsCallbackList, mapIsLoaded } from "@/store";

export const useLoad = (action: (map: naver.maps.Map) => void) => {
  mapIsLoaded.value
    ? action(mapInstance.value!)
    : mapsCallbackList.value.push(action);
};
