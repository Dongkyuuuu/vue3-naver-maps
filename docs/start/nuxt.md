# Nuxt.js

::: warning
Vue3를 지원하는 `Nuxt3 RC9`를 기준으로 작성되었습니다. 아직 `RC` 버전으로 추후 사용법이 변경 될 수 있습니다.
:::

[Nuxt.js](https://v3.nuxtjs.org/)는 하이브리드 Vue 프레임워크 입니다. Nuxt.js의 특성상 Server환경과 Client환경을 동시에 사용합니다. `vue3-naver-maps`는 항상 client 환경에서 실행 되어야 하며, 방법은 아래와 같습니다.

아래의 `Plugin` `Component` 두 방법 모두 적용하는 것을 권장합니다.

## Plugin

```javascript
// plugins/vue3-naver-maps.client.js
import naver from "vue3-naver-maps";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(naver, {
    clientId: "your clientId", // Required
    category: "ncp", // Optional
    subModules: "", // Optional
  });
});
```

Nuxt에서 제공하는 [Plugins](https://v3.nuxtjs.org/guide/directory-structure/plugins#vue-plugins)기능을 활용하여 사용 가능합니다. 파일명에 `.client`가 들어가야 client 환경에서 플러그인이 설치 됩니다.

## Component

```vue
// your-components
<script setup>
import { NaverMap } from "vue3-naver-maps";
</script>

<template>
  <client-only>
    <naver-map> </naver-map>
  </client-only>
</template>
```

[ClientOnly](https://v3.nuxtjs.org/guide/directory-structure/components#clientonly-component) 컴포넌트를 사용하여 Client Side에서만 렌더링 되게끔 처리해줍니다.
