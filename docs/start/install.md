# 설치하기

## 설치방법

### yarn

```bash
yarn add vue3-naver-maps

#for typescript users
yarn add -D @types/navermaps
```

### npm

```bash
npm install vue3-naver-maps --save

#for typescript users
npm install @types/navermaps --save-dev
```

::: tip
타입스크립트를 사용하지 않는다면, `@types/navermaps`는 설치하지 않으셔도 괜찮습니다.
:::

## 설정방법

`main.{js|ts}`에서 아래와 같이 설정하면 사용 가능합니다. 자세한 옵션에 대한 설명은 [레퍼런스]('../../../reference/#설치옵션')를 참고해주세요.

## [중요] Maps API 신규 출시로 인한 분기

2025.04.17 부터 AI NAVER API 서비스에서 제공하던 Maps 서비스 신규 생성이 불가능해졌습니다. 신규 Maps 상품이 출시 되었고 그에따라 서비스 사용 분기가 추가 되었습니다. [공지](https://www.ncloud.com/support/notice/all/1930)

앱을 use하여 초기화 해주는 옵션에 `enableAiMaps` 옵션이 추가되었습니다. 기존 Ai Maps 사용자들을 위해 기본값은 **true**로 설정 하였습니다.

⭐️ **신규 서비스를 생성하여 사용하시는 경우 `enableAiMaps`를 false로 설정하시고 사용하시길 바랍니다** ⭐️

```javascript
// main.js
import { createApp } from "vue";
import App from "./app.vue";
import { createNaverMap } from "vue3-naver-maps";

const app = createApp(App);

app
  .use(createNaverMap, {
    clientId: "your clientId", // Required
    enableAiMaps: true // Optional, 기본값 true
    category: "ncp", // Optional
    subModules: [], // Optional, "panorama" | "geocoder" | "drawing" | "visualization"
  })
  .mount("#app");
```
