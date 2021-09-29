import { install } from "./config";

import NaverMaps from "./components/Map.vue";
import NaverMarker from "./components/Marker.vue";
import NaverInfoWindow from "./components/InfoWindow.vue";
import NaverCircle from "./components/Circle.vue";
import NaverEllipse from "./components/Ellipse.vue";
import NaverRectangle from "./components/Rectangle.vue";

// export * from "./apis";
export { naverV3 } from "./types";

export {
  /**
   * Export Components
   */
  NaverMaps,
  NaverMarker,
  NaverInfoWindow,
  NaverCircle,
  NaverEllipse,
  NaverRectangle,
  /**
   * default
   */
  install as default,
};
