const config = {
  lang: "ko",
  title: "Vue3 Naver Maps",
  description: "NaverMap component for Vue3",
  base: "/vue3-naver-maps/",
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
  locales: {
    "/": {
      lang: "ko",
      title: "Vue3 Naver Maps",
      description: "NaverMap component for Vue3",
    },
  },
  themeConfig: {
    repo: "DongKyuuuu/vue3-naver-maps",
    docsRepo: "DongKyuuuu/vue3-naver-maps",
    docsDir: "docs",
    docsBranch: "gh-pages",
    editLinks: true,
    editLinkText:
      "이 문서에 대한 의견이 있으시거나, 문제를 발견하셨으면 제보해주세요!",
    base: "/vue3-naver-maps/",
    algolia: {
      apiKey: "7adde5189a3290d9fdc17f2977f984bf",
      indexName: "vue-naver-maps",
    },
    locales: {
      // Korean
      "/": {
        label: "한국어",
        selectText: "Languages",
        nav: [
          {
            text: "Guide",
            link: "/guide/",
          },
          {
            text: "API 레퍼런스",
            link: "/api/",
          },
          {
            text: "NaverMapsAPI",
            link: "https://navermaps.github.io/maps.js.ncp/",
          },
          {
            text: "Changelog",
            link: "https://github.com/DongKyuuuu/vue3-naver-maps/blob/main/CHANGELOG.md",
          },
        ],
        sidebar: [
          {
            text: "소개",
            link: "/",
          },
          {
            text: "설치하기",
            link: "/installation",
          },
          {
            text: "컴포넌트 가이드",
            collapsable: false,
            children: [
              {
                text: "시작하기",
                link: "/guide/",
              },
              {
                text: "Maps",
                link: "/guide/Maps",
              },
              {
                text: "Marker",
                link: "/guide/Marker",
              },
              {
                text: "InfoWindow",
                link: "/guide/Infowindow",
              },
              {
                text: "Circle",
                link: "/guide/Circle",
              },
              {
                text: "Ellipse",
                link: "/guide/Ellipse",
              },
              {
                text: "Rectangle",
                link: "/guide/Rectangle",
              },
            ],
          },
          {
            text: "타입스크립트",
            collapsable: false,
            children: [
              {
                text: "사용하기",
                link: "/types/",
              },
              {
                text: "타입정의",
                link: "/types/define",
              },
            ],
          },
        ],
      },
    },
  },
};

module.exports = config;
