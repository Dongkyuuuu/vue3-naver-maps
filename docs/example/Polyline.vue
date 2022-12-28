<script setup>
import { ref } from "vue";
import { NaverMap, NaverPolyline } from "../../src";

const path = ref([
  { lat: 37.5670131, lng: 126.9797895 },
  { lat: 126.979215, lng: 37.5649555 },
]);
const mapOptions = {
  latitude: 37.56663888630603, // 지도 중앙 위도
  longitude: 126.97838310403904, // 지도 중앙 경도
  zoom: 7,
  zoomControl: false,
  zoomControlOptions: { position: "TOP_RIGHT" },
};

const onLoadPolyline = (polylineObject) => {
  polyline.value = polylineObject;
};
</script>

<template>
  <naver-map style="width: 100%; height: 400px" :mapOptions="mapOptions">
    <naver-polyline :path="path" @onLoad="onLoadPolyline($event)" />
  </naver-map>
</template>
