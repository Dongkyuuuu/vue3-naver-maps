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
    <naver-polyline :paths="polylinePaths" @onLoad="loadPolyline($event)" />
    <!-- <naver-polygon :paths="polygonPaths" @onLoad="loadPolygon($event)" /> -->
    <!-- <naver-rectangle
      :bounds="rectangleBounds"
      @onLoad="loadRectangle($event)"
    ></naver-rectangle> -->
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
import type { naverV3 } from "vue3-naver-maps";
import {
  NaverMaps,
  NaverMarker,
  NaverInfoWindow,
  NaverCircle,
  NaverEllipse,
  NaverRectangle,
  NaverPolygon,
  NaverPolyline,
} from "vue3-naver-maps";

export default defineComponent({
  components: {
    NaverMaps,
    NaverMarker,
    NaverInfoWindow,
    NaverCircle,
    NaverEllipse,
    NaverRectangle,
    NaverPolygon,
    NaverPolyline,
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
    const polygon = ref<naver.maps.Polygon>();
    const polygonPaths = ref<naver.maps.ArrayOfCoordsLiteral>([
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
    const polyline = ref<naver.maps.Polyline>();
    const polylinePaths = ref<naver.maps.ArrayOfCoords>([
      new window.naver.maps.LatLng(37.359924641705476, 127.1148204803467),
      new window.naver.maps.LatLng(37.36343797188166, 127.11486339569092),
      new window.naver.maps.LatLng(37.368520071054576, 127.11473464965819),
      new window.naver.maps.LatLng(37.3685882848096, 127.1088123321533),
      new window.naver.maps.LatLng(37.37295383612657, 127.10876941680907),
      new window.naver.maps.LatLng(37.38001321351567, 127.11851119995116),
      new window.naver.maps.LatLng(37.378546827477855, 127.11984157562254),
      new window.naver.maps.LatLng(37.376637072444105, 127.12052822113036),
      new window.naver.maps.LatLng(37.37530703574853, 127.12190151214598),
      new window.naver.maps.LatLng(37.371657839593894, 127.11645126342773),
      new window.naver.maps.LatLng(37.36855417793982, 127.1207857131958),
    ]);
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
    const loadPolygon = (polygonObject: naver.maps.Polygon) => {
      polygon.value = polygonObject;
      console.log(polygon.value);
    };
    const loadPolyline = (polylineObject: naver.maps.Polyline) => {
      polyline.value = polylineObject;
      console.log(polyline.value);
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
      polygon,
      polygonPaths,
      loadPolygon,
      polyline,
      polylinePaths,
      loadPolyline,
    };
  },
});
</script>

<style></style>
