import theme from "vitepress/dist/client/theme-default";
import { NaverMaps, NaverMarker } from "../../../dist/vue3-naver-maps";

export default {
  ...theme,
  enhanceApp({ app, router, siteData }) {
    app.component("naver-maps", NaverMaps);
    app.component("naver-marker", NaverMarker);
  },
};
