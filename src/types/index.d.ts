export type SubModules = "panorama" | "geocoder" | "drawing" | "visualization"; // NaverMap SubModule Options

export interface InitializeOptions {
  clientId: string;
  enableAiMaps?: boolean;
  category?: "gov" | "ncp" | "fin";
  subModules?: SubModules[];
}

export type MapInitializeCallbacks = Array<(map: naver.maps.Map) => void>;

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
