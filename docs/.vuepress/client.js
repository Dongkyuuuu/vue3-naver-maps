import { defineClientConfig } from "@vuepress/client";
import navermaps from "../../dist/vue3-naver-maps.esm";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(navermaps, { clientId: "krm0ye8xno" });
  },
  setup() {},
  rootComponents: [],
});
