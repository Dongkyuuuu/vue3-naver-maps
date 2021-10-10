# GroundOverlay

`NaverGroundOverlay`는 지상 오버레이를 생성하는 컴포넌트 입니다. `NaverMaps` 생성 이후에 사용 가능합니다.

## 예시

\
<naver-ground-overlay />

```vue
<template>
  <naver-maps
    width="100%"
    height="400px"
    :mapOptions="mapOptions"
    :initLayers="initLayers"
    @onLoad="onLoadMap($event)"
  >
    <naver-ground-overlay
      url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfyGZVXaUWqWHg_xYsNoMjKP2JbjXAIPoE-Q&usqp=CAU"
      :bound="groundOverlayBound"
      @onLoad="onLoadGroundOverlay($event)"
    />
  </naver-maps>
</template>

<script>
import { ref } from "vue";
import { NaverMaps, NaverGroundOverlay } from "vue3-naver-maps";

export default {
  components: { NaverMaps, NaverGroundOverlay },
  setup: () => {
    const map = ref();
    const groundOverlay = ref();
    const groundOverlayBound = ref({
      south: 37.566616443521745,
      north: 38.566616443521745,
      west: 126.97837068565364,
      east: 127.97837068565364,
    });
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
    const onLoadGroundOverlay = (groundOverlayObject) => {
      groundOverlay.value = groundOverlayObject;
    };

    return {
      map,
      mapOptions,
      initLayers,
      onLoadMap,
      groundOverlay,
      groundOverlayBound,
      onLoadGroundOverlay,
    };
  },
};
</script>
```

자세한 Props, Emit 옵션은 [NaverGroundOverlay](../api/#navergroundoverlay)에서 확인 가능합니다.

## 설정

`url` `bound`는 필수적으로 입력해 주셔야 합니다. 사용할 이미지와 생성될 위치를 지정합니다.

## UI 이벤트

이벤트에 대한 자세한 설명은 [이벤트 상세설명](https://navermaps.github.io/maps.js.ncp/docs/naver.maps.GroundOverlay.html#toc13__anchor)에서 확인 가능합니다.

- click
- dblclick
