# CustomOverlay

`NaverCustomOverlay`는 사용자 정의 오버레이를 생성하는 컴포넌트 입니다. `NaverMaps` 생성 이후에 사용 가능합니다.

## 예시

\
<naver-custom-overlay />

```vue
<template>
  <naver-maps
    width="100%"
    height="400px"
    :mapOptions="mapOptions"
    :initLayers="initLayers"
    @onLoad="onLoadMap($event)"
  >
    <naver-custom-overlay
      :latitude="37.56663888630603"
      :longitude="126.97838310403904"
      @onLoad="onLoadCustomOverlay($event)"
    >
      <div
        style="
          width: 200px;
          height: 100px;
          background-color: white;
          border: 1px solid gray;
        "
      >
        hello, CustomOverlay😎
      </div>
    </naver-custom-overlay>
  </naver-maps>
</template>

<script>
import { ref } from "vue";
import { NaverMaps, NaverCustomOverlay } from "vue3-naver-maps";

export default {
  components: { NaverMaps, NaverCustomOverlay },
  setup: () => {
    const map = ref();
    const customOverlay = ref();
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
    const onLoadCustomOverlay = (customOverlayObject) => {
      customOverlay.value = customOverlayObject;
    };

    return {
      map,
      mapOptions,
      initLayers,
      onLoadMap,
      customOverlay,
      onLoadCustomOverlay,
    };
  },
};
</script>
```

자세한 Props, Emit 옵션은 [NaverCustomOverlay](../api/#navercustomoverlay)에서 확인 가능합니다.

## 설정

`latitude` `longitude`는 필수적으로 입력해 주셔야 합니다. 생성될 위치를 정의합니다.

[사용자정의 오버레이 구조](https://navermaps.github.io/maps.js.ncp/docs/tutorial-6-CustomOverlay.html)에 대한 자세한 원리는 해당 링크에서 확인 가능합니다.

## UI 이벤트

사용자 정의 이벤트 임으로, 지정된 UI 이벤트는 없습니다. 필요한 경우 이벤트 리스너 생성을 통해 별도로 사용해주셔야 합니다.
