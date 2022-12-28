import { defineClientConfig } from "@vuepress/client";
import { createNaverMap } from "../../src";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(createNaverMap, { clientId: "krm0ye8xno" });
  },
  setup() {},
  rootComponents: [],
});
