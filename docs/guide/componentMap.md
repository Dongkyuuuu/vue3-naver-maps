# naver-map

`naver-map` 컴포넌트는 지도를 생성하는 컴포넌트 입니다. 해당 컴포넌트를 사용하지 않고 다른 컴포넌트를 사용하는 경우 동작하지 않습니다. 모든 컴포넌트 중 가장 먼저 사용해주셔야 합니다.

## 예시

```vue
<template>
  <naver-map
    width="400px"
    height="400px"
    :mapOptions="mapOptions"
    :initLayers="initLayers"
    @onLoad="onLoadMap($event)"
  >
  </naver-map>
</template>

<script>
import { ref } from "vue";

export default {
  setup: () => {
    const map = ref(null);
    const mapOptions = {
      latitude: 36,
      longitude: 126,
      zoom: 12,
      zoomControl: false,
      zoomControlOptions: { position: "TOP_RIGHT" },
      mapTypeControl: false,
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

    return {
      map,
      mapOptions,
      initLayers,
    };
  },
};
</script>
```

## 설정

모든 Props는 필수 값이 아닙니다. 해당 Props이 없는 경우 기본값이 적용 됩니다. `@onLoad`도 마찬가지로 naver 객체를 설정할 일이 없으면 사용하지 않아도 상관 없습니다.

자세한 설정 옵션은 [naver-map 옵션](../api/#naver-map)에서 확인 가능합니다.

:::info 알림
기본 값은 네이버에서 제공하는 기본 값으로 설정 됩니다.
:::
