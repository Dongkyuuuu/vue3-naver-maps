<script setup>
import { ref } from "vue";
import {
  NaverMap,
  NaverMarker,
  NaverInfoWindow,
} from "../../src";

const marker = ref();
const infoWindow = ref();
const isOpen = ref(true); // false: 안보임, true: 보임

const onLoadMarker = (markerObject) => {
  marker.value = markerObject;
};
const onLoadInfoWindow = (infoWindowObject) => {
  infoWindow.value = infoWindowObject;
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
  <naver-map style="width: 100%; height: 400px" :mapOptions="mapOptions">
    <naver-marker
      @click="isOpen = !isOpen"
      :latitude="37.51347"
      :longitude="127.041722"
      @onLoad="onLoadMarker($event)"
    >
    </naver-marker>
    <naver-info-window
      :marker="marker"
      :open="isOpen"
      @onLoad="onLoadInfoWindow($event)"
    >
      <div class="infowindow-style">click Marker!😎</div>
    </naver-info-window>
  </naver-map>
</template>

<style>
.infowindow-style {
  color: black;
  background-color: white;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  padding: 6px 8px;
}
</style>
