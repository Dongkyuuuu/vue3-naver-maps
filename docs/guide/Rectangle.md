# Rectangle

`NaverRectangle`는 사각형을 생성하는 컴포넌트 입니다. `NaverMaps` 생성 이후에 사용 가능합니다.

## 예시

\
<naver-rectangle />

```vue
<template>
  <naver-maps
    width="100%"
    height="400px"
    :mapOptions="mapOptions"
    :initLayers="initLayers"
    @onLoad="onLoadMap($event)"
  >
    <naver-rectangle
      :bounds="rectangleBound"
      @onLoad="onLoadRectangle($event)"
    />
  </naver-maps>
</template>

<script>
import { ref } from "vue";
import { NaverMaps, NaverRectangle } from "../../dist/vue3-naver-maps";

export default {
  components: { NaverMaps, NaverRectangle },
  setup: () => {
    const map = ref();
    const rectangle = ref();
    const rectangleBound = ref({
      south: 36,
      north: 38,
      west: 126,
      east: 128,
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
    const onLoadRectangle = (rectangleObject) => {
      rectangle.value = rectangleObject;
    };

    return {
      map,
      mapOptions,
      initLayers,
      onLoadMap,
      rectangleBound,
      onLoadRectangle,
    };
  },
};
</script>
```

자세한 Props, Emit 옵션은 [NaverRectangle](../api/#naverrectangle)에서 확인 가능합니다.

## 설정

`bounds`는 필수적으로 입력해 주셔야 합니다.

`options`로 옵션을 넘겨 줄 수 있습니다.

## UI 이벤트

이벤트에 대한 자세한 설명은 [이벤트 상세설명](https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Rectangle.html#toc25__anchor)에서 확인 가능합니다.

- bounds_changed
- click
- clickable_changed
- dblclick
- mousedown
- mouseout
- mouseover
- mouseup
- visible_changed
- zIndex_changed
