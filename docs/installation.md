# 설치하기

`TypeScript`를 이용한 프로젝트를 진행하고 있으시다면, `@types/navermaps`를 필수적으로 설치해주세요.

`Javascript`로 프로젝트를 진행하고 있으시다면, ` @types/navermaps`를 제외하고 설치합니다.

### npm

```bash
$ npm install vue3-naver-maps @types/navermaps --save
```

### Yarn

```bash
$ yarn add vue3-naver-maps @types/navermaps
```

## 설정

[Naver Cloud Platform](https://www.ncloud.com/product/applicationService/maps)에서 지도 서비스 신청 후 발급된 `Client ID` 키가 필요합니다.

설치에 관한 자세한 옵션은 [설치옵션 API](./api/#설치옵션)를 참조해주세요

### 예시

```javascript
// main.js
import { createApp } from "vue";
import naver from "vue3-naver-maps";

const app = createApp(App);

app.use(naver, { clientId: "your clientId" }).mount("#app");
```

```vue
<!-- your component -->
<template>
  <naver-maps> ... </naver-maps>
</template>

<script>
import { NaverMaps } from "vue3-naver-maps";

export default {
  components: { NaverMaps },
  setup: () => {},
};
</script>
```

## SSR 설정

설치옵션에서 `ssr`을 `true`로 변경한 뒤 SPA 기능과 똑같이 사용하시면 됩니다. SSR의 동작에 관한 설명은 [SSR 옵션](./api/#설치옵션)에서 확인 가능합니다.

```javascript
// main.js
import { createApp } from "vue";
import naver from "vue3-naver-maps";

const app = createApp(App);

app
  .use(naver, {
    clientId: "your clientId",
    ssr: true, // SSR 옵션 추가
  })
  .mount("#app");
```
