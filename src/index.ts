import installer from "./config/installer";

import NaverMaps from "./components/Map.vue";
import NaverMarker from "./components/Marker.vue";
import NaverInfoWindow from "./components/InfoWindow.vue";
import NaverCircle from "./components/Circle.vue";
import NaverEllipse from "./components/Ellipse.vue";
import NaverRectangle from "./components/Rectangle.vue";
import NaverPolygon from "./components/Polygon.vue";
import NaverPolyline from "./components/Polyline.vue";
import NaverGroundOverlay from "./components/GroundOverlay.vue";
// import NaverCustomOverlay from "./components/CutsomOverlay.vue";

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
  NaverPolygon,
  NaverPolyline,
  NaverGroundOverlay,
  // NaverCustomOverlay,
};
export default installer.install;
