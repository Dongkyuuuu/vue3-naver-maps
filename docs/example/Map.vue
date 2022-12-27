<script setup>
import { ref } from "vue";
import { NaverMap } from "../../src";

const map = ref();
const mapOptions = {
  latitude: 37.51347, // 지도 중앙 위도
  longitude: 127.041722, // 지도 중앙 경도
  zoom: 13,
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
</script>

<template>
  <naver-map
    style="width: 100%; height: 400px"
    :mapOptions="mapOptions"
    :initLayers="initLayers"
    @onLoad="onLoadMap($event)"
  >
  </naver-map>
</template>
