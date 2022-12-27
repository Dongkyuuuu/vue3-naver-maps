<script setup lang="ts">
import { ref } from "vue";
import {
  NaverMap,
  NaverMarker,
  NaverInfoWindow,
  NaverCircle,
  NaverEllipse,
} from "~/src";

const marker = ref();
const ellipseBounds = ref<naver.maps.BoundsLiteral>({
  south: 37.566072,
  north: 37.5651,
  west: 126.978467,
  east: 126.977357,
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
  </NaverMap>
</template>

<style scoped></style>
