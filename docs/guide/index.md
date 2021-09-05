# 시작하기

:::info 알림
본 문서의 모든 예시는 `Composition API`로 작성되어 있습니다. `Options API`도 naver 객체를 반환받아 정상적으로 사용 가능합니다.
:::

타입스크립트로 프로젝트를 진행하는 경우, `@types/navermaps`가 필수적으로 설치되어 있어야 합니다. 본 프로젝트에서는 사용되는 타입 정의들은 글로벌 타입 `naverV3`를 통해 이용 가능합니다.

## naver 객체

모든 컴포넌트는 라이프 사이클 훅 `onMounted`에서 `@onLoad`를 통해 각 객체를 반환합니다. 반환된 객체를 통해서 추가적인 옵션을 적용 시킬 수 있습니다.

```vue
<template>
  <naver-map @onLoad="onLoadMap($evnet)"> </naver-map>
</template>

<script>
import { ref } from "vue";

export default {
  setup: () => {
    const map = ref(null);
    const onLoadMap = (mapObject) => {
      map.value = mapObject; // map에 반환된 객체 저장
      map.value.getOptions();
    };

    return {
      onLoadMap,
    };
  },
};
</script>
```

## 객체옵션

```js
const LatLng = new window.naver.maps.LatLng(37, 127);
```

위의 예제 처럼 Vue 프로젝트 내부에서 `window.naver`를 통해 네이버 객체 생성이 가능 합니다.

본 문서에서는 naver의 객체 옵션에 대해 구체적으로 언급하지 않습니다. 자세한 옵션은 상단 메뉴의 `NaverMapsAPI(공식문서)`를 클릭하여 확인 가능합니다.

## UI 이벤트

컴포넌트에서 `v-on` directive를 이용해서 네이버에서 제공하는 UI 이벤트를 사용할 수 있습니다. UI이벤트는 표준 DOM(Document Object Model) 이벤트처럼 보이나 실제로는 NAVER 지도 API v3의 이벤트입니다.

### 목록

- mousedown
- mouseup
- click
- dblclick
- rightclick
- mouseover
- mouseout
- mousemove
- dragstart
- drag
- dragend
- touchstart
- touchmove
- touchend
- pinchstart
- pinch
- pinchend
- tap
- longtap
- twofingertap
- doubletap

#### `naver-map`에서만 사용가능

- addLayer
- bounds_changed
- center_changed
- centerPoint_changed
