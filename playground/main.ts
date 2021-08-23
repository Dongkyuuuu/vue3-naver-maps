import { createApp } from "vue";
import App from "./App.vue";
import navermaps from "../dist/vue3-naver-maps.js";

/**
 * create config.ts file
 * export default "yout clientId"
 */
import clientId from "./config";

const app = createApp(App);

app.use(navermaps, { clientID: clientId }).mount("#app");
