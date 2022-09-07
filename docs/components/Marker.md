# Marker

`NaverMarker`는 마커를 생성하는 컴포넌트 입니다. `latitude` `longitude`를 필수적으로 입력해주어야 하며, `NaverMaps` 생성 이후에 사용 가능합니다.

## 예시

자세한 Props, Emit 옵션은 [NaverMarker](../reference/#navermarker)에서 확인 가능합니다.

<Marker />

```vue
<script setup>
import { ref } from "vue";
import { NaverMap, NaverMarker } from "vue3-naver-maps";

const marker = ref();
const onLoadMarker = (markerObject) => {
  marker.value = markerObject;
};
const mapOptions = {
  latitude: 37.51347, // 지도 중앙 위도
  longitude: 127.041722, // 지도 중앙 경도
  zoom: 13,
  zoomControl: false,
  zoomControlOptions: { position: "TOP_RIGHT" },
};
</script>

<template>
  <naver-map style="width: 100%; height: 400px" :mapOptions="mapOptions">
    <naver-marker
      :latitude="37.51347"
      :longitude="127.041722"
      @onLoad="onLoadMarker($event)"
    >
    </naver-marker>
  </naver-map>
</template>
```

## 설정

`latitude`, `longitude`는 필수적으로 입력해 주셔야 합니다.

컴포넌트 내부에 코드를 작성하면 `HtmlIcon`이 적용 됩니다. `HtmlIcon`사용 시 `anchor`와 `size`를 별도로 지정해 주셔야 마커위치를 정확히 유지 할 수 있습니다.

:::tip
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
