import { createApp } from "vue";
import App from "./App.vue";
import navermaps from "vue3-naver-maps";

/**
 * create config.ts file
 * export default "yout clientId"
 */
import clientId from "./config";

const app = createApp(App);

app.use(navermaps, { clientId: clientId }).mount("#app");
