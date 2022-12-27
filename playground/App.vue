<script setup lang="ts">
import { ref } from "vue";
import {
  NaverMap,
  NaverMarker,
  NaverInfoWindow,
  NaverCircle,
  NaverEllipse,
  NaverGroundOverlay,
  NaverPolygon,
  NaverPolyline,
  NaverRectangle,
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

const polygonPaths = ref<any>([
  [126.9797895, 37.5670131],
  [126.979215, 37.5649555],
  [126.9766789, 37.5649082],
  [126.9789515, 37.5637645],
  [126.9785598, 37.5614914],
  [126.9804949, 37.5632666],
  [126.9827689, 37.5619065],
  [126.9818039, 37.5639213],
  [126.9837414, 37.5653719],
  [126.9811162, 37.5651081],
]);

const polylinePaths = ref<any>([
  { lat: 37.570053, lng: 126.983005 },
  { lat: 37.566343, lng: 126.982671 },
]);

const rectangleBounds = ref<naver.maps.BoundsLiteral>({
  south: 37.564998,
  north: 37.566449,
  west: 126.973221,
  east: 126.975849,
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

    <NaverPolygon :paths="polygonPaths" />

    <NaverPolyline :path="polylinePaths" />

    <NaverRectangle :bounds="rectangleBounds" />
  </NaverMap>
</template>

<style scoped></style>
