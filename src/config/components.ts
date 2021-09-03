import { App } from "vue";

import Map from "../components/Map.vue";
import Marker from "../components/Marker.vue";

export function components(app: App<Element>) {
  app.component("naver-map", Map);
  app.component("naver-marker", Marker);
}
