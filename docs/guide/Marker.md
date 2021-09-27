# Marker

`NaverMarker` 마커를 생성하는 컴포넌트 입니다. `NaverMaps` 생성 이후에 생성됩니다. Vue.js의 `v-on` 이벤트를 같이 사용 가능합니다.

## 예시

\
<naver-marker />

```vue
<template>
  <naver-maps>
    <naver-marker
      :latitude="37.56663888630603"
      :longitude="126.97838310403904"
      @onLoad="onLoadMarker($event)"
    >
      <!-- Html Icon  -->
    </naver-marker>
  </naver-maps>
</template>

<script>
import { ref } from "vue";
import { NaverMaps, NaverMarker } from "vue3-naver-maps";

export default {
  components: { NaverMaps, NaverMarker },
  setup: () => {
    const marker = ref();
    const onLoadMarker = (markerObject) => {
      marker.value = markerObject;
    };

    return { onLoadMarker };
  },
};
</script>
```

자세한 Props, Emit 옵션은 [NaverMarker](../api/#NaverMarker)에서 확인 가능합니다.

## 설정

`latitude`, `longitude`는 필수적으로 입력해 주셔야 합니다.

컴포넌트 내부에 코드를 작성하면 `HtmlIcon`이 적용 됩니다. `HtmlIcon`사용 시 `anchor`와 `size`를 별도로 지정해 주셔야 마커위치를 정확히 유지 할 수 있습니다.

:::info 알림
HtmlIcon을 사용하지 않으면 네이버 기본 마커 스타일이 적용 됩니다.
:::

## UI 이벤트

### Mouse

- mousedown
- mouseup
- click
- dblclick
- rightclick
- mouseover
- mouseout
- mousemove

### Drag

- dragstart
- drag
- dragen

### Touch

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
