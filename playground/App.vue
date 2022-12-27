<script setup lang="ts">
import { ref } from "vue";
import {
  NaverMap,
  NaverMarker,
  NaverInfoWindow,
  NaverCircle,
  NaverEllipse,
  NaverGroundOverlay,
} from "~/src";

const marker = ref();
const ellipseBounds = ref<naver.maps.BoundsLiteral>({
  south: 37.566072,
  north: 37.5651,
  west: 126.978467,
  east: 126.977357,
});

const groundOverlayImg =
  "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ";
const groundOverlayBound = ref<naver.maps.BoundsLiteral>({
  south: 37.565316,
  north: 37.565985,
  west: 126.978879,
  east: 126.979668,
});
</script>

<template>
  <NaverMap style="width: 90vw; height: 80vh">
    <NaverMarker
      :latitude="37.566616443521745"
      :longitude="126.97837068565364"
      @on-load="marker = $event"
    />
    <NaverInfoWindow :marker="marker" :open="true">
      Hello, Infowindow!
    </NaverInfoWindow>

    <NaverCircle
      :latitude="37.566616443521745"
      :longitude="126.97837068565364"
    />

    <NaverEllipse :bounds="ellipseBounds" />

    <NaverGroundOverlay :url="groundOverlayImg" :bounds="groundOverlayBound" />
  </NaverMap>
</template>

<style scoped></style>
