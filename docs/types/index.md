# 타입스크립트 지원

타입스크립트로 프로젝트를 진행하는 경우, [`@types/navermaps`](https://www.npmjs.com/package/@types/navermaps)는 **필수적으로 설치**되어 있어야 합니다. 글로벌 네임스페이스 `naver.maps`를 통해 네이버 지도 자체 타입을 사용 할 수 있습니다.

`vue3-naver-maps`에서 자체적으로 제공하는 타입 정의들은 `naverV3` 호출을 통해 이용 가능합니다.

## 예시

`vue3-naver-maps`에서 `naverV3` 타입정의를 호출합니다.

```vue
<template>
  <naver-maps :mapOptions="mapOptions" @onLoad="onLoadMap($event)">
  </naver-maps>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { NaverMaps } from "vue3-naver-maps";
import type { naverV3 } from "vue3-naver-maps"; // 네임스페이스 호출

export default defineComponent({
  components: { NaverMaps },
  setup: () => {
    const map = ref<naver.maps.Map>();
    const mapOptions = ref<naverV3.mapOptions>({
      latitude: 36,
      longitude: 126,
      zoom: 12,
      zoomControl: false,
      zoomControlOptions: { position: "TOP_RIGHT" },
      mapTypeControl: false,
    });
    const onLoadMap = (mapObject: naver.maps.Map) => {
      map.value = mapObject; // map에 반환된 객체 저장
      map.value.setCenter(new window.naver.maps.LatLng(36, 127)); // 지도 중앙 변경
    };

    return {
      onLoadMap,
      mapOptions,
    };
  },
});
</script>
```

## naverV3

`vue3-naver-maps`에서 `naverV3` 네임스페이스를 호출합니다.

```ts
import type { naverV3 } from "vue3-naver-maps";
```

## naver.maps

글로벌 네임스페이스 `naver.maps`를 호출합니다.

```ts
const map: naver.maps.Map | null = null;
```
