export namespace install {
  export type category = "gov" | "ncp" | "fin";

  export interface options {
    clientId: string;
    category?: category;
    subModules?: string;
  }
}

export namespace naverV3 {
  export interface layers {
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
  export type initLayer =
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

  export type initLayers = initLayer[];

  export interface mapOptions {
    zoom?: number;
    lat?: number;
    lng?: number;
    zoomControl?: boolean;
    zoomControlOptions?: {
      position?: string;
    };
  }
}
