import { install } from "./config";
import NaverMaps from "./components/Map.vue";
import NaverMarker from "./components/Marker.vue";
import NaverInfoWindow from "./components/InfoWindow.vue";

// export * from "./apis";
export { naverV3 } from "./types";

/**
 * Export Components
 */
export { NaverMaps, NaverMarker, NaverInfoWindow };

export default install;
