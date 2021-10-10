export { useMap } from "./mapAPI";

export declare namespace naverV3 {
  namespace install {
    type category = "gov" | "ncp" | "fin";

    interface options {
      clientId: string;
      category?: category;
      subModules?: string;
    }
  }
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

  interface mapOptions extends naver.maps.MapOptions {
    latitude?: number;
    longitude?: number;
  }

  interface htmlIcon {
    size: {
      width: number;
      height: number;
    };
    anchor: {
      x: number;
      y: number;
    };
  }

  interface customOverlayOptions {
    map: naver.maps.Map;
    position: naver.maps.LatLng;
    content: HTMLDivElement;
  }
}
