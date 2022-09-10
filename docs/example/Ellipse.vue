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
