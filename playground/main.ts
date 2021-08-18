import { createApp } from "vue";
import App from "./App.vue";
import navermaps from "../dist/vue3-naver-maps.js";

const app = createApp(App);

app.use(navermaps, { clientID: "c4ovrqy4fg" }).mount("#app");
