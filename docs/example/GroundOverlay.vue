<script setup>
import { ref } from "vue";
import { NaverMap, NaverGroundOverlay } from "../../dist/vue3-naver-maps.esm";

const groundOverlay = ref();
const groundOverlayBound = ref({
  south: 37.566616443521745,
  north: 38.566616443521745,
  west: 126.97837068565364,
  east: 127.97837068565364,
});
const mapOptions = {
  latitude: 37.56663888630603, // 지도 중앙 위도
  longitude: 126.97838310403904, // 지도 중앙 경도
  zoom: 8,
  zoomControl: false,
  zoomControlOptions: { position: "TOP_RIGHT" },
};
const onLoadGroundOverlay = (groundOverlayObject) => {
  groundOverlay.value = groundOverlayObject;
};
</script>

<template>
  <naver-map style="width: 100%; height: 400px" :mapOptions="mapOptions">
    <naver-ground-overlay
      url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfyGZVXaUWqWHg_xYsNoMjKP2JbjXAIPoE-Q&usqp=CAU"
      :bounds="groundOverlayBound"
      @onLoad="onLoadGroundOverlay($event)"
    />
  </naver-map>
</template>
