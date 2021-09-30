<template>
  <naver-maps width="100%">
    <naver-marker
      :latitude="37.56663888630603"
      :longitude="126.97838310403904"
      @onLoad="onLoadMarker($event)"
      @click="isOpen = !isOpen"
    >
    </naver-marker>
    <naver-info-window
      :marker="marker"
      :isOpen="isOpen"
      @onLoad="onLoadInfoWindow($event)"
    >
      <div class="infowindow-style">click Marker!😎</div>
    </naver-info-window>
  </naver-maps>
</template>

<script>
import { ref } from "vue";
import {
  NaverMaps,
  NaverMarker,
  NaverInfoWindow,
} from "../../dist/vue3-naver-maps.esm";

export default {
  components: { NaverMaps, NaverMarker, NaverInfoWindow },
  setup: () => {
    const marker = ref();
    const infoWindow = ref();
    const isOpen = ref(true); // false: 안보임, true: 보임

    const onLoadMarker = (markerObject) => {
      marker.value = markerObject;
    };
    const onLoadInfoWindow = (infoWindowObject) => {
      infoWindow.value = infoWindowObject;
    };
    return {
      isOpen,
      marker,
      onLoadMarker,
      onLoadInfoWindow,
    };
  },
};
</script>

<style>
.infowindow-style {
  background-color: white;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  padding: 6px 8px;
}
</style>
