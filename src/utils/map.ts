import type { naverV3 } from "../types";
/**
 *
 *  NaverMap Init Methods
 */
export function useMapInitOptions() {
  const mapLayers = (
    settings: naver.maps.MapOptions,
    initLayers: naverV3.initLayer[]
  ) => {
    const layers: naverV3.layers = {
      BACKGROUND: "bg",
      BACKGROUND_DETAIL: "ol",
      BICYCLE: "br",
      CADASTRAL: "lp",
      CTT: "ctt",
      HIKING_TRAIL: "ar",
      PANORAMA: "pr",
      POI_KOREAN: "lko",
      TRANSIT: "ts",
      KOREAN: "lko",
      ENGLISH: "len",
      CHINESE: "lzh",
      JAPANESE: "lja",
    };

    settings.mapTypes = new window.naver.maps.MapTypeRegistry({
      normal: window.naver.maps.NaverStyleMapTypeOptions.getNormalMap({
        overlayType: initLayers.map((layer) => layers[layer]).join("."),
      }),
    });

    return settings;
  };

  const mapSettings = (
    mapOptions: naverV3.mapOptions,
    initLayers: naverV3.initLayer[]
  ) => {
    const settings: naver.maps.MapOptions = {
      maxZoom: 21,
      minZoom: 0,
    };
    const mapOptionsLat =
      mapOptions.latitude || mapOptions.latitude === 0 ? true : false;
    const mapOptionsLng =
      mapOptions.longitude || mapOptions.longitude === 0 ? true : false;

    if (!mapOptionsLat || !mapOptionsLng) {
      settings.center = new window.naver.maps.LatLng(
        mapOptions.latitude as number,
        mapOptions.longitude as number
      );
    }

    if (initLayers.length < 1) return settings;
    else return mapLayers(settings, initLayers);
  };

  return {
    mapLayers,
    mapSettings,
  };
}
