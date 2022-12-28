import { createApp } from "vue";
import { createNaverMap } from "~/src";

import App from "./App.vue";

const app = createApp(App);
app.use(createNaverMap, {
  clientId: import.meta.env.VITE_NAVER_MAP_KEY,
});

app.mount("#app");
