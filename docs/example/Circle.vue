<script setup>
import { ref } from "vue";
import { NaverMap, NaverCircle } from "../../dist/vue3-naver-maps.esm";

const circle = ref();
const mapOptions = {
  latitude: 37.51347, // 지도 중앙 위도
  longitude: 127.041722, // 지도 중앙 경도
  zoom: 16,
  zoomControl: false,
  zoomControlOptions: { position: "TOP_RIGHT" },
};

const onLoadCircle = (circleObject) => {
  circle.value = circleObject;
};
</script>

<template>
  <naver-map style="width: 100%; height: 400px" :mapOptions="mapOptions">
    <naver-circle
      :latitude="37.51347"
      :longitude="127.041722"
      :radius="350"
      @onLoad="onLoadCircle($event)"
    />
  </naver-map>
</template>
