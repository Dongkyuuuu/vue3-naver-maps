import { install } from "./config";

import NaverMaps from "./components/Map.vue";
import NaverMarker from "./components/Marker.vue";
import NaverInfoWindow from "./components/InfoWindow.vue";
import NaverCircle from "./components/Circle.vue";

// export * from "./apis";
export { naverV3 } from "./types";

/**
 * Export Components
 */
export { NaverMaps, NaverMarker, NaverInfoWindow, NaverCircle };

export default install;
