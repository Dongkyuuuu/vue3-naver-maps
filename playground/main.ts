import { createApp } from "vue";
import { createNaverMap } from "~/src";
import router from "./router";

import App from "./LayoutPage.vue";

const app = createApp(App);
app.use(router).use(createNaverMap, {
  clientId: import.meta.env.VITE_NAVER_MAP_KEY,
});

app.mount("#app");
