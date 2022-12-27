<script setup>
import { ref } from "vue";
import { NaverMap, NaverMarker } from "../../src";

const marker = ref();
const onLoadMarker = (markerObject) => {
  marker.value = markerObject;
};
const mapOptions = {
  latitude: 37.51347, // 지도 중앙 위도
  longitude: 127.041722, // 지도 중앙 경도
  zoom: 13,
  zoomControl: false,
  zoomControlOptions: { position: "TOP_RIGHT" },
};
</script>

<template>
  <naver-map style="width: 100%; height: 400px"  :mapOptions="mapOptions">
    <naver-marker
      :latitude="37.51347"
      :longitude="127.041722"
      @onLoad="onLoadMarker($event)"
    >
    </naver-marker>
  </naver-map>
</template>
