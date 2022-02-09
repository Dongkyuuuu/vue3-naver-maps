import { createApp } from "vue";
import App from "./App.vue";
import OptionsAPI from "./optionAPI.vue";
import navermaps from "vue3-naver-maps";

const app = createApp(App);

// Add your clientId
app.use(navermaps, { clientId: "" }).mount("#app");
