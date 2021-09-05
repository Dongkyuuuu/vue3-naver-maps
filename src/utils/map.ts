import type { naverV3 } from "../types";
/**
 *
 *  NaverMap Init Methods
 */
export function useMapInitOptions() {
  const mapLayers = (initLayers: naverV3.initLayer[]) => {
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

    return {
      mapTypes: new window.naver.maps.MapTypeRegistry({
        normal: window.naver.maps.NaverStyleMapTypeOptions.getNormalMap({
          overlayType: initLayers.map((layer) => layers[layer]).join("."),
        }),
      }),
    };
  };

  /**
   * set mapOptions
   */
  function mapSettings(mapOptions: naverV3.mapOptions) {
    const settings: naverV3.mapOptions = {
      ...mapOptions,
    };

    if (
      typeof mapOptions.latitude! === "number" &&
      typeof mapOptions.longitude!
    ) {
      settings.center = new window.naver.maps.LatLng(
        mapOptions.latitude!,
        mapOptions.longitude!
      );
    }

    return settings;
  }

  return {
    mapLayers,
    mapSettings,
  };
}
