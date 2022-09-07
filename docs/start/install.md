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

```javascript
// main.js
import { createApp } from "vue";
import App from "./app.vue";
import naver from "vue3-naver-maps";

const app = createApp(App);

app
  .use(naver, {
    clientId: "your clientId", // Required
    category: "ncp", // Optional
    subModules: "", // Optional
  })
  .mount("#app");
```
