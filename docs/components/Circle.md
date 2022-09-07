# Circle

`NaverCircle`는 원을 생성하는 컴포넌트 입니다. `NaverMaps` 생성 이후에 사용 가능합니다.

## 예시

\
<naver-circle />

```vue
<template>
  <naver-maps
    width="100%"
    height="400px"
    :mapOptions="mapOptions"
    :initLayers="initLayers"
    @onLoad="onLoadMap($event)"
  >
    <naver-circle
      :latitude="37.56663888630603"
      :longitude="126.97838310403904"
      :radius="350"
      @onLoad="onLoadCircle($event)"
    />
  </naver-maps>
</template>

<script>
import { ref } from "vue";
import { NaverMaps, NaverCircle } from "vue3-naver-maps";

export default {
  components: { NaverMaps, NaverCircle },
  setup: () => {
    const map = ref();
    const circle = ref();
    const mapOptions = {
      latitude: 37.56663888630603, // 지도 중앙 위도
      longitude: 126.97838310403904, // 지도 중앙 경도
      zoom: 16,
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
    const onLoadCircle = (circleObject) => {
      circle.value = circleObject;
    };

    return {
      map,
      mapOptions,
      initLayers,
      onLoadMap,
      onLoadCircle,
    };
  },
};
</script>
```

자세한 Props, Emit 옵션은 [NaverCircle](../api/#navercircle)에서 확인 가능합니다.

## 설정

`latitude`, `longitude`는 필수적으로 입력해 주셔야 합니다.

`radius`는 원의 반경을 나타냅니다. 단위는 **미터**입니다.

## UI 이벤트

이벤트에 대한 자세한 설명은 [이벤트 상세설명](https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Circle.html#toc28__anchor)에서 확인 가능합니다.

- center_changed
- click
- clickable_changed
- dblclick
- mousedown
- mouseout
- mouseover
- mouseup
- radius_changed
- visible_changed
- zIndex_changed
