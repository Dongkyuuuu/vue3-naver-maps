# InfoWindow

`NaverInfowindow` 컴포넌트는 정보창을 생성하는 컴포넌트 입니다. `NaverMaps` 와 `NaverMarker` 컴포넌트 호출이 먼저 필요합니다.

## 예시

자세한 Props, Emit 옵션은 [NaverInfoWindow](../reference/#naverinfowindow)에서 확인 가능합니다.

<InfoWindow />

```vue
<script setup>
import { ref } from "vue";
import {
  NaverMap,
  NaverMarker,
  NaverInfoWindow,
} from "vue3-naver-maps;

const marker = ref();
const infoWindow = ref();
const isOpen = ref(true); // false: 안보임, true: 보임

const onLoadMarker = (markerObject) => {
  marker.value = markerObject;
};
const onLoadInfoWindow = (infoWindowObject) => {
  infoWindow.value = infoWindowObject;
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
      @click="isOpen = !isOpen"
      :latitude="37.51347"
      :longitude="127.041722"
      @onLoad="onLoadMarker($event)"
    >
    </naver-marker>
    <naver-info-window
      :marker="marker"
      :open="isOpen"
      @onLoad="onLoadInfoWindow($event)"
    >
      <div class="infowindow-style">click Marker!😎</div>
    </naver-info-window>
  </naver-map>
</template>

<style>
.infowindow-style {
  color: black;
  background-color: white;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  padding: 6px 8px;
}
</style>
```

## 설정

만약 기본 마커 스타일을 사용하고 있다면 `NaverInfoWindow` 컴포넌트를 `NaverMarker` 컴포넌트 내부에 사용하시면 안됩니다. HTML-Icon을 사용하고 있다면, `NaverMarker` 컴포넌트 내부에 작성하여도 상관 없습니다.

`@onLoad`를 통해 `NaverInfoWindow` 객체를 넘겨 받아 별도 설정이 가능합니다.

:::tip
Marker는 필수적으로 Props로 넘겨주어야 합니다.
:::

## UI 이벤트

이벤트에 대한 자세한 설명은 [이벤트 상세설명](https://navermaps.github.io/maps.js.ncp/docs/naver.maps.InfoWindow.html#toc17__anchor)에서 확인 가능합니다.

- anchorColor_changed
- anchorSize_changed
- anchorSkew_changed
- backgroundColor_changed
- borderColor_changed
- borderWidth_changed
- close
- content_changed
- disableAnchor_changed
- disableAutoPan_changed
- maxWidth_changed
- open
- pixelOffset_changed
- position_changed
- zIndex_changed
