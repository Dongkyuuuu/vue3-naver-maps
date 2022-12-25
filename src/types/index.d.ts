export type SubModules = "panorama" | "geocoder" | "drawing" | "visualization"; // NaverMap SubModul Options

export interface Options {
  clientId: string;
  category?: "gov" | "ncp" | "fin";
  subModules?: SubModules[];
}

export type InitCallBacks = Array<(map: naver.maps.Map) => void>;
