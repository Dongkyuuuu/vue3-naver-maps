import { createApp } from "vue";

import { createNaverMap } from "../dist";
import App from "./App.vue";
import "./style.css";

const app = createApp(App);
app.use(createNaverMap, {
  clientId: "fspce45tye",
  enableAiMaps: false,
});

app.mount("#app");
