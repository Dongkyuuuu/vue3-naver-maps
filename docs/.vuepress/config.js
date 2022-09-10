import { defaultTheme, defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { containerPlugin } from "@vuepress/plugin-container";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import path from "path";

const config = {
  locales: {
    "/": {
      lang: "ko",
      title: "vue3-naver-maps",
      description: "Naver Maps JavaScript APIv3 component for Vue3",
    },
    // "/en/": {
    //   lang: "en-US",
    //   title: "vue3-naver-maps",
    //   description: "Naver Maps JavaScript APIv3 component for Vue3",
    // },
  },
  theme: defaultTheme({
    locales: {
      "/": {
        selectLanguageName: "한국어",
        navbar: [
          {
            text: "ChangeLog",
            link: "https://github.com/DongKyuuuu/vue3-naver-maps/blob/main/CHANGELOG.md",
          },
          {
            text: "NaverMaps 공식문서",
            link: "https://navermaps.github.io/maps.js.ncp/",
          },
          {
            text: "Github",
            link: "https://github.com/Dongkyuuuu/vue3-naver-maps",
          },
        ],
        sidebar: [
          {
            text: "시작하기",
            collapsible: true,
            children: [
              {
                text: "vue3-naver-maps는 무엇인가요?",
                link: "/",
              },
              {
                text: "설치하기",
                link: "/start/install",
              },
              {
                text: "Nuxt.js",
                link: "/start/nuxt",
              },
              {
                text: "NaverMaps API 사용",
                link: "/start/custom",
              },
            ],
          },
          {
            text: "컴포넌트",
            collapsible: true,
            children: [
              {
                text: "Map",
                link: "/components/Map",
              },
              {
                text: "Marker",
                link: "/components/Marker",
              },
              {
                text: "InfoWindow",
                link: "/components/Infowindow",
              },
              {
                text: "Circle",
                link: "/components/Circle",
              },
              {
                text: "Ellipse",
                link: "/components/Ellipse",
              },
              {
                text: "Rectangle",
                link: "/components/Rectangle",
              },
              {
                text: "Polygon",
                link: "/components/Polygon",
              },
              {
                text: "Polyline",
                link: "/components/Polyline",
              },
              {
                text: "GroundOverlay",
                link: "/components/GroundOverlay",
              },
              // {
              //   text: "CustomOverlay",
              //   link: "/guide/CustomOverlay",
              // },
            ],
          },
          {
            text: "레퍼런스",
            collapsible: true,
            link: "/reference",
          },
          {
            text: "마이그레이션",
            collapsible: true,
            children: [
              {
                text: "2.x 버전으로 부터 마이그레이션",
                link: "/migrations/from2",
              },
            ],
          },
        ],
      },
      // "/en/": {
      //   selectLanguageName: "English",
      //   navbar: [
      //     {
      //       text: "ChangeLog",
      //       link: "https://github.com/DongKyuuuu/vue3-naver-maps/blob/main/CHANGELOG.md",
      //     },
      //     {
      //       text: "NaverMaps Document",
      //       link: "https://navermaps.github.io/maps.js.ncp/",
      //     },
      //   ],
      // },
    },
  }),
  head: [
    [
      "script",
      {
        id: "vue3-naver-maps",
        src: "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=krm0ye8xno",
        async: "",
        defer: "",
      },
    ],
  ],
  base: "/vue3-naver-maps/",
  plugins: [
    containerPlugin({
      type: "tip",
      locales: {
        "/": {
          defaultInfo: "안내",
        },
        "/en/": {
          defaultInfo: "TIP",
        },
      },
    }),
    containerPlugin({
      type: "warning",
      locales: {
        "/": {
          defaultInfo: "주의",
        },
        "/en/": {
          defaultInfo: "WARNING",
        },
      },
    }),
    containerPlugin({
      type: "danger",
      locales: {
        "/": {
          defaultInfo: "경고",
        },
        "/en/": {
          defaultInfo: "DANGER",
        },
      },
    }),
    docsearchPlugin({
      apiKey: "7adde5189a3290d9fdc17f2977f984bf",
      indexName: "vue-naver-maps",
      locales: {
        "/": {
          placeholder: "검색할 내용을 입력하세요",
          translations: {
            button: {
              buttonText: "검색",
            },
          },
        },
        "/en/": {
          placeholder: "Search docs",
          translations: {
            button: {
              buttonText: "Search",
            },
          },
        },
      },
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "../example"),
    }),
  ],
};

export default defineUserConfig(config);
