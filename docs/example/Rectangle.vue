<script setup>
import { ref } from "vue";
import { NaverMap, NaverRectangle } from "../../dist/vue3-naver-maps.esm";

const rectangle = ref();
const mapOptions = {
  latitude: 37.56663888630603, // 지도 중앙 위도
  longitude: 126.97838310403904, // 지도 중앙 경도
  zoom: 7,
  zoomControl: false,
  zoomControlOptions: { position: "TOP_RIGHT" },
};
const rectangleBound = ref({
  south: 36,
  north: 38,
  west: 126,
  east: 128,
});
const onLoadRectangle = (rectangleObject) => {
  rectangle.value = rectangleObject;
};
</script>

<template>
  <naver-map style="width: 100%; height: 400px" :mapOptions="mapOptions">
    <naver-rectangle
      :bounds="rectangleBound"
      @onLoad="onLoadRectangle($event)"
    />
  </naver-map>
</template>
