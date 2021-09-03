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

  export interface mapOptions extends naver.maps.MapOptions {
    zoom?: number;
    latitude?: number;
    longitude?: number;
    zoomControl?: boolean;
    zoomControlOptions?: {
      position?: string;
    };
    mapTypeControl?: boolean;
  }

  export interface htmlIcon {
    size: {
      width: number;
      height: number;
    };
    anchor: {
      x: number;
      y: number;
    };
  }
}
