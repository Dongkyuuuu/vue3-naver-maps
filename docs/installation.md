# 설치하기

### npm

```bash
$ npm install vue3-naver-maps --save
```

### Yarn

```bash
$ yarn add vue3-naver-maps
```

`TypeScript`를 이용한 프로젝트를 진행하고 있으시다면, `@types/navermaps`를 추가 설치 해주세요

## 설정

[Naver Cloud Platform](https://www.ncloud.com/product/applicationService/maps)에서 지도 서비스 신청 후 발급된 `Client ID` 키가 필요합니다.

`SubModules` `공공기관ID` `금융기관ID` 등 설치에 관한 자세한 옵션은 [설치옵션 API](./api/#설치옵션)를 참조해주세요

::: info SSR
SSR 모드 기능을 지원합니다. 아래 예시와 똑같이 진행하면 SSR 모드 에서도 사용 가능합니다.
:::

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
