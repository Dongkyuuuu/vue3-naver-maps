# InfoWindow

`NaverInfowindow` 컴포넌트는 정보창을 생성하는 컴포넌트 입니다. `NaverMaps` 와 `NaverMarker` 컴포넌트 호출이 먼저 필요합니다.

## 예시

\
<naver-info-window />

```vue
<template>
  <naver-maps width="100%">
    <naver-marker
      :latitude="37.56663888630603"
      :longitude="126.97838310403904"
      @onLoad="onLoadMarker($event)"
      @click="isOpen = !isOpen"
    >
    </naver-marker>
    <naver-info-window
      :marker="marker"
      :isOpen="isOpen"
      @onLoad="onLoadInfoWindow($event)"
    >
      <div class="infowindow-style">click Marker!😎</div>
    </naver-info-window>
  </naver-maps>
</template>

<script>
import { ref } from "vue";
import {
  NaverMaps,
  NaverMarker,
  NaverInfoWindow,
} from "../../dist/vue3-naver-maps";

export default {
  components: { NaverMaps, NaverMarker, NaverInfoWindow },
  setup: () => {
    const marker = ref();
    const infoWindow = ref();
    const isOpen = ref(true); // false: 안보임, true: 보임

    const onLoadMarker = (markerObject) => {
      marker.value = markerObject;
    };
    const onLoadInfoWindow = (infoWindowObject) => {
      infoWindow.value = infoWindowObject;
    };
    return {
      isOpen,
      marker,
      onLoadMarker,
      onLoadInfoWindow,
    };
  },
};
</script>

<style>
.infowindow-style {
  background-color: white;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  padding: 6px 8px;
}
</style>
```

자세한 Props, Emit 옵션은 [NaverInfoWindow](../api/#naverinfowindow)에서 확인 가능합니다.

## 설정

만약 기본 마커 스타일을 사용하고 있다면 `NaverInfoWindow` 컴포넌트를 `NaverMarker` 컴포넌트 내부에 사용하시면 안됩니다. HTML-Icon을 사용하고 있다면, `NaverMarker` 컴포넌트 내부에 작성하여도 상관 없습니다.

`@onLoad`를 통해 `NaverInfoWindow` 객체를 넘겨 받아 별도 설정이 가능합니다.

:::info 알림
Marker는 필수적으로 Props로 넘겨주어야 합니다.
:::
