declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare namespace NodeJS {
  interface Process {
    browser: boolean;
  }
}
declare interface Window {
  $naverMapsCallback: [];
  $naverMapsLoaded: boolean;
  $naverMapsObject: naver.maps.Map;
}

declare namespace install {
  type category = "gov" | "ncp" | "fin";
  interface options {
    clientID: string;
    category?: category;
    subModules?: string;
  }
}

declare namespace naver.vue3 {
  interface layers {
    [key: string]: string;
    BACKGROUND: "bg";
    BACKGROUND_DETAIL: "ol";
    BICYCLE: "br";
    CADASTRAL: "lp";
    CTT: "ctt";
    HIKING_TRAIL: "ar";
    PANORAMA: "pr";
    POI_KOREAN: "lko";
    TRANSIT: "ts";
    KOREAN: "lko";
    ENGLISH: "len";
    CHINESE: "lzh";
    JAPANESE: "lja";
  }
  type initLayer =
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

  type initLayers = initLayer[];

  interface mapOptions {
    zoom?: number;
    lat?: number;
    lng?: number;
    zoomControl?: boolean;
    zoomControlOptions?: {
      position?: string;
    };
  }
}
