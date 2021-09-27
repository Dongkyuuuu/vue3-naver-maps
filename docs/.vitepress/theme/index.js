import theme from "vitepress/dist/client/theme-default";

import NaverMaps from "../../example/Map.vue";
import NaverMarker from "../../example/Marker.vue";
import NaverInfoWindow from "../../example/InfoWindow.vue";

export default {
  ...theme,
  enhanceApp({ app, router, siteData }) {
    app.component("naver-maps", NaverMaps);
    app.component("naver-marker", NaverMarker);
    app.component("naver-info-window", NaverInfoWindow);
  },
};
