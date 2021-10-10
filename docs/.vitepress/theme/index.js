import theme from "vitepress/dist/client/theme-default";

import NaverMaps from "../../example/Map.vue";
import NaverMarker from "../../example/Marker.vue";
import NaverInfoWindow from "../../example/InfoWindow.vue";
import NaverCircle from "../../example/Circle.vue";
import NaverEllipse from "../../example/Ellipse.vue";
import NaverRectangle from "../../example/Rectangle.vue";
import NaverPolygon from "../../example/Polygon.vue";
import NaverPolyline from "../../example/Polyline.vue";
import NaverGroundOverlay from "../../example/GroundOverlay.vue";
import NaverCustomOverlay from "../../example/CustomOverlay.vue";

export default {
  ...theme,
  enhanceApp({ app, router, siteData }) {
    app.config.warnHandler = (msg, vm, trace) => {};
    app.component("naver-maps", NaverMaps);
    app.component("naver-marker", NaverMarker);
    app.component("naver-info-window", NaverInfoWindow);
    app.component("naver-circle", NaverCircle);
    app.component("naver-ellipse", NaverEllipse);
    app.component("naver-rectangle", NaverRectangle);
    app.component("naver-polygon", NaverPolygon);
    app.component("naver-polyline", NaverPolyline);
    app.component("naver-ground-overlay", NaverGroundOverlay);
    app.component("naver-custom-overlay", NaverCustomOverlay);
  },
};
