# NaverMaps API 사용

라이브러리에서 제공 하는 기능 이외에 `naver객체`를 이용하여 무언가를 해야하는 경우가 있습니다.

객체를 직접 호출하여 `Map` 혹은 `Marker` 인스턴스의 설정값을 변경하거나, LatLng 같은 좌표 값들을 생성 할 때 필요합니다.

`Naver Maps JavaScript API v3`에서 제공하는 기본적인 모든 객체는 `vue3-naver-maps` 설치 이후 전역객체(window)에서 바로 접근 가능합니다.

::: warning
naver 객체는 항상 vue3-naver-maps 설치 이후 전역객체(window)를 통해 접근 가능합니다.
:::

## Vue 컴포넌트 내부에서 naver 객체 접근

아래와 같은 방식으로 Vue 컴포넌트 내부에서도 naver 객체에 접근 가능합니다.

```vue
<script setup>
import { NaverMap } from "vue3-naver-maps";

const onLoadMap = (map) => {
  const latLng = new window.naver.maps.LatLng(37.51347, 127.041722); // window 생략 가능
  map.setCenter(latLng); // Change Map Center
};
</script>

<template>
  <naver-map style="width: 100%; height: 100%" @onLoad="onLoadMap($event)" />
</template>
```
