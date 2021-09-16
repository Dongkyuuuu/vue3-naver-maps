import theme from "vitepress/dist/client/theme-default";
import Vue3NaverMaps, {
  NaverMaps,
  NaverMarker,
} from "../../../dist/vue3-naver-maps";

export default {
  ...theme,
  enhanceApp({ app, router, siteData }) {
    app.use(Vue3NaverMaps, { clientId: "krm0ye8xno" });

    app.component("naver-maps", NaverMaps);
    app.component("naver-marker", NaverMarker);
  },
};
