import { defineClientConfig } from "@vuepress/client";
import { createNaverMap } from "../../src";

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(createNaverMap, { clientId: "fspce45tye", enableAiMaps: false });
  },
  setup() {},
  rootComponents: [],
});
