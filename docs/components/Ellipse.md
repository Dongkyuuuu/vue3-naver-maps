# Ellipse

`NaverEllipse`는 타원을 생성하는 컴포넌트 입니다. `NaverMap` 생성 이후에 사용 가능합니다.

## 예시

자세한 Props, Emit 옵션은 [NaverEllipse](../reference/#naverellipse)에서 확인 가능합니다.

<Ellipse />

```vue
<script setup>
import { ref } from "vue";
import { NaverMap, NaverEllipse } from "../../dist/vue3-naver-maps.esm";

const ellipse = ref();
const ellipseBound = ref({
  south: 36,
  north: 38,
  west: 126,
  east: 128,
});
const mapOptions = {
  latitude: 37.56663888630603, // 지도 중앙 위도
  longitude: 126.97838310403904, // 지도 중앙 경도
  zoom: 7,
  zoomControl: false,
  zoomControlOptions: { position: "TOP_RIGHT" },
};

const onLoadEllipse = (ellipseObject) => {
  ellipse.value = ellipseObject;
};
</script>

<template>
  <naver-map style="width: 100%; height: 400px" :mapOptions="mapOptions">
    <naver-ellipse :bounds="ellipseBound" @onLoad="onLoadEllipse($event)" />
  </naver-map>
</template>
```

## 설정

`bounds`는 필수적으로 입력해 주셔야 합니다.

`options`로 옵션을 넘겨 줄 수 있습니다.

## UI 이벤트

이벤트에 대한 자세한 설명은 [이벤트 상세설명](https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Ellipse.html#toc24__anchor)에서 확인 가능합니다.

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
