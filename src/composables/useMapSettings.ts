export type Layers =
  | "BACKGROUND"
  | "BACKGROUND_DETAIL"
  | "BICYCLE"
  | "CADASTRAL"
  | "CTT"
  | "HIKING_TRAIL"
  | "PANORAMA"
  | "POI_KOREAN"
  | "TRANSIT"
  | "KOREAN"
  | "ENGLISH"
  | "CHINESE"
  | "JAPANESE";

export interface MapOptions extends naver.maps.MapOptions {
  latitude?: number;
  longitude?: number;
}

export class MapSettings {
  private _layers: Layers[];
  private _options: MapOptions;

  constructor(layers: Layers[] = [], options: MapOptions = {}) {
    this._layers = layers;
    this._options = options;
  }

  setSettings(layers: Layers[] = [], options: MapOptions = {}) {
    this._layers = layers;
    this._options = options;
  }
  getSettings() {
    return {
      ...this.getLayers(),
      ...this.getMapSettings(),
    };
  }
  // Get navermap layers option
  private getLayers() {
    const LAYER_HASH_TABLE = {
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
    const overlayType = this._layers
      .map((layer) => LAYER_HASH_TABLE[layer])
      .join(".");

    return {
      mapTypes: new window.naver.maps.MapTypeRegistry({
        normal: window.naver.maps.NaverStyleMapTypeOptions.getNormalMap({
          overlayType: overlayType,
        }),
        satellite: window.naver.maps.NaverStyleMapTypeOptions.getSatelliteMap({
          overlayType: overlayType,
        }),
        hybrid: window.naver.maps.NaverStyleMapTypeOptions.getHybridMap({
          overlayType: overlayType,
        }),
        terrain: window.naver.maps.NaverStyleMapTypeOptions.getTerrainMap({
          overlayType: overlayType,
        }),
      }),
    };
  }
  // Get navermap mapOption
  private getMapSettings() {
    const options = this._options;
    const settings = Object.assign(options, {});
    const isSetCenter = [
      typeof options.latitude,
      typeof options.longitude,
    ].every((condition) => condition === "number");

    if (isSetCenter) {
      settings.center = new window.naver.maps.LatLng(
        options.latitude!,
        options.longitude!
      );
    }

    return settings;
  }
}
