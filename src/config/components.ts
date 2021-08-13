import { App } from "vue";

import Map from "./components/Map.vue";

export function createComponents(app: App<Element>) {
  app.component("naver-maps", Map);
}
