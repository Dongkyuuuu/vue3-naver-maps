# SSR 지원

`vue3-naver-maps`는 SSR을 지원합니다. 기존 SPA 사용방법과 다른점은 Naver Script 생성 방식과 네이버 객체에 접근하는 방법이 달라집니다.

## 스크립트 생성 및 객체 접근

`SPA`에서는 웹 애플리케이션이 생성 될때(main.js) Naver Script가 생성 됩니다. 그러므로 Options API에서의 `beforeCreate` / `created`와 Composition API의 `setup`에서 네이버 객체 접근이 가능합니다.

```js
// SPA
export default {
  setup: () => {
    console.log(new window.naver.maps());
  },
};
```

`SSR`에서는 `NaverMaps`컴포넌트의 LifeCycle인 `beforeMount`에서 Naver Script가 생성 됩니다. 네이버 객체에 접근하려면 `onMounted` 이후에 접근하여야 합니다.

```js
// SSR
import { onMounted } from "vue";

export default {
  setup: () => {
    onMounted(() => {
      console.log(new window.naver.maps());
    });
  },
};
```
