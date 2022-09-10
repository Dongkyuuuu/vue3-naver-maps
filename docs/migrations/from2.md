# 2.x 버전으로 부터 마이그레이션

2.x는 `setup function`를 이용하여 작성 되었고, 3.x `script setup`으로 작성 되었습니다. 이 차이로 인해 변경 되는 큰 부분은 없으나 2.x 버전과 몇 가지가 변경되었습니다.

## NaverMaps 변경 사항

2.x와 비교하여 2가지 변경 사항이 있습니다.

```vue
<script setup>
import { ref } from "vue";
import { NaverMap } from "../../dist/vue3-naver-maps.esm"; // 컴포넌트 명 변경, 2.x: NaverMaps, 3.x: NaverMap

const map = ref();
const mapOptions = {
  latitude: 37.51347, // 지도 중앙 위도
  longitude: 127.041722, // 지도 중앙 경도
  zoom: 13,
  zoomControl: false,
  zoomControlOptions: { position: "TOP_RIGHT" },
};
</script>

<template>
  <!-- 지도 스타일 선언 방식 변경 -->
  <naver-map style="width: 100%; height: 400px" :mapOptions="mapOptions">
  </naver-map>
</template>
```

### 컴포넌트 이름 변경

기존 `NaverMaps`로 호출되던 지도 컴포넌트 이름이 `NaverMap`으로 변경 되었습니다.

### 지도 스타일 선언 방식 변경

지도 컴포넌트로 `width`과 `height` Props로 넘겨주어 지도의 크기를 조절하던 방식을 `style`로 처리하게 끔 변경하였습니다. style은 기본 css 스타일 선언 방식과 동일 합니다.

## GroundOverlay 변경사항

2.x와 비교하여 1가지 변경 사항이 있습니다.

### Props 속성 명 변경

- 2.x: `bound`

- 3.x: `bounds`
