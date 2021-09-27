<template>
  <button @click="openInfoWindow()">open Infowindow</button>
  <button @click="closeInfoWindow()">close Infowindow</button>
  <naver-maps
    :width="mapSize.width"
    :height="mapSize.height"
    :mapOptions="mapOptions"
    :initLayers="initLayers"
    @onLoad="loadMap($event)"
  >
    <naver-rectangle
      :bounds="rectangleBounds"
      @onLoad="loadRectangle($event)"
    ></naver-rectangle>
    <!-- <naver-ellipse
      :bounds="ellipseBounds"
      @onLoad="loadEllpise($event)"
    ></naver-ellipse> -->
    <!-- <naver-circle
      :latitude="37.566616443521745"
      :longitude="126.97837068565364"
      :radius="100"
      @onLoad="loadCircle($event)"
    ></naver-circle> -->
    <!-- <naver-marker
      :latitude="37.566616443521745"
      :longitude="126.97837068565364"
      @onLoad="loadMarker($event)"
    >
    </naver-marker> -->
    <!-- <naver-info-window
      :marker="marker"
      :isOpen="isOpen"
      :options="infoWindowOptions"
      style="background-color: white; padding: 8px; width: 200px; height: 100px"
      @onLoad="loadInfoWindow($event)"
    >
      <div>hello, InfoWindow!</div>
    </naver-info-window> -->
  </naver-maps>
  <br />
  <br />
  <br />
  {{ mapOptions }}
  <button @click="change()">2323</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from "vue";
import type { naverV3 } from "../dist/vue3-naver-maps";
import {
  NaverMaps,
  NaverMarker,
  NaverInfoWindow,
  NaverCircle,
  NaverEllipse,
  NaverRectangle,
} from "../dist/vue3-naver-maps";

export default defineComponent({
  components: {
    NaverMaps,
    NaverMarker,
    NaverInfoWindow,
    NaverCircle,
    NaverEllipse,
    NaverRectangle,
  },
  name: "App",
  setup: (props, { emit }) => {
    const map = ref<naver.maps.Map>();
    const marker = ref<naver.maps.Marker>();
    const infoWindow = ref<naver.maps.InfoWindow>();
    const circle = ref<naver.maps.Circle>();
    const ellipse = ref<naver.maps.Ellipse>();
    const ellipseBounds = ref<naver.maps.BoundsLiteral>({
      south: 37.566616443521745,
      north: 38.566616443521745,
      west: 126.97837068565364,
      east: 127.97837068565364,
    });
    const rectangle = ref<naver.maps.Rectangle>();
    const rectangleBounds = ref<naver.maps.BoundsLiteral>({
      south: 37.566616443521745,
      north: 38.566616443521745,
      west: 126.97837068565364,
      east: 127.97837068565364,
    });
    const infoWindowOptions = ref<naver.maps.InfoWindowOptions>();
    const isOpen = ref<boolean>(false);
    const mapSize = reactive({
      width: "400px",
      height: "400px",
    });
    const mapOptions = ref<naverV3.mapOptions>({
      // latitude: 36,
      // longitude: 126,
      zoom: 16,
      zoomControl: false,
      zoomControlOptions: { position: "TOP_RIGHT" },
      mapTypeControl: false,
    });
    const initLayers = ref<naverV3.initLayer[]>([
      "BACKGROUND",
      "BACKGROUND_DETAIL",
      "POI_KOREAN",
      "TRANSIT",
      "ENGLISH",
    ]);
    const loadMap = (mapObject: naver.maps.Map) => {
      map.value = mapObject;
      // console.log("LoadMap", map.value);
    };
    const loadMarker = (markerObjecy: naver.maps.Marker) => {
      marker.value = markerObjecy;
    };
    const loadInfoWindow = (infoWindowObjevt: naver.maps.InfoWindow) => {
      infoWindow.value = infoWindowObjevt;
    };
    const loadCircle = (circleObject: naver.maps.Circle) => {
      circle.value = circleObject;
      console.log(circle.value);
    };
    const loadEllpise = (ellpiseObject: naver.maps.Ellipse) => {
      ellipse.value = ellpiseObject;
      console.log(ellipse.value);
    };
    const loadRectangle = (rectangleObject: naver.maps.Rectangle) => {
      rectangle.value = rectangleObject;
      console.log(rectangle.value);
    };

    const openInfoWindow = () => {
      // console.log("openAction: ", infoWindow.value);
      // infoWindow.value!.open(map.value!, marker.value!);
      // isOpen.value = true;
      infoWindow.value!.open(map.value!, marker.value!);
    };
    const closeInfoWindow = () => {
      // console.log(infoWindow.value!.getMap());
      // if (infoWindow.value?.getMap()) infoWindow.value!.close();
      // infoWindow.value!.setMap(null);
      // isOpen.value = false;
      infoWindowOptions.value = {
        content: "dsjhfkjdhf",
        anchorSkew: false,
      };
    };

    const change = () => {};
    return {
      mapOptions,
      initLayers,
      loadMap,
      change,
      mapSize,
      map,
      marker,
      loadMarker,
      loadInfoWindow,
      openInfoWindow,
      closeInfoWindow,
      isOpen,
      infoWindowOptions,
      circle,
      loadCircle,
      ellipse,
      ellipseBounds,
      loadEllpise,
      rectangle,
      rectangleBounds,
      loadRectangle,
    };
  },
});
</script>

<style></style>
