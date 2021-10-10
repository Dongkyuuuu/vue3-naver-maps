# Polyline

`NaverPolyline`는 폴리곤을 생성하는 컴포넌트 입니다. `NaverMaps` 생성 이후에 사용 가능합니다.

## 예시

\
<naver-polyline />

```vue
<template>
  <naver-maps
    width="100%"
    height="400px"
    :mapOptions="mapOptions"
    :initLayers="initLayers"
    @onLoad="onLoadMap($event)"
  >
    <naver-polyline :path="path" @onLoad="onLoadPolyline($event)" />
  </naver-maps>
</template>

<script>
import { ref } from "vue";
import { NaverMaps, NaverPolyline } from "vue3-naver-maps";

export default {
  components: { NaverMaps, NaverPolyline },
  setup: () => {
    const map = ref();
    const polyline = ref();
    const paths = ref([
      { lat: 37.5670131, lng: 126.9797895 },
      { lat: 126.979215, lng: 37.5649555 },
    ]);
    const mapOptions = {
      latitude: 37.56663888630603, // 지도 중앙 위도
      longitude: 126.97838310403904, // 지도 중앙 경도
      zoom: 8,
      zoomControl: false,
      zoomControlOptions: { position: "TOP_RIGHT" },
    };
    const initLayers = [
      "BACKGROUND",
      "BACKGROUND_DETAIL",
      "POI_KOREAN",
      "TRANSIT",
      "ENGLISH",
    ];

    const onLoadMap = (mapObject) => {
      map.value = mapObject;
    };
    const onLoadPolyline = (polylineObject) => {
      polyline.value = polylineObject;
    };

    return {
      map,
      mapOptions,
      initLayers,
      onLoadMap,
      onLoadPolyline,
      paths,
    };
  },
};
</script>
```

자세한 Props, Emit 옵션은 [NaverPolyline](../api/#naverpolyline)에서 확인 가능합니다.

## 설정

`path`는 필수적으로 입력해 주셔야 합니다. 연결할 각 좌표를 의미 합니다.

## UI 이벤트

이벤트에 대한 자세한 설명은 [이벤트 상세설명](https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Polyline.html#toc26__anchor)에서 확인 가능합니다.

- click
- clickable_changed
- dblclick
- mousedown
- mouseout
- mouseover
- mouseup
- visible_changed
- zIndex_changed
