<template>
  <naver-maps
    :width="mapSize.width"
    :height="mapSize.height"
    :mapOptions="mapOptions"
    :initLayers="initLayers"
    @onLoad="loadMap($event)"
  >
    <naver-marker
      :latitude="37.566616443521745"
      :longitude="126.97837068565364"
      @onLoad="loadMarker($event)"
    >
    </naver-marker>
    <naver-info-window
      :marker="marker"
      :isOpen="true"
      style="background-color: white; padding: 8px; width: 200px; height: 100px"
    >
      <div>hello, InfoWindow!</div>
    </naver-info-window>
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
} from "../dist/vue3-naver-maps";

export default defineComponent({
  components: { NaverMaps, NaverMarker, NaverInfoWindow },
  name: "App",
  setup: (props, { emit }) => {
    const map = ref<naver.maps.Map>();
    const marker = ref<naver.maps.Marker>();
    const mapSize = reactive({
      width: "400px",
      height: "400px",
    });
    const mapOptions = ref<naverV3.mapOptions>({
      // latitude: 36,
      // longitude: 126,
      zoom: 12,
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
      console.log("LoadMap", map.value);
    };
    const loadMarker = (markerObjecy: naver.maps.Marker) => {
      marker.value = markerObjecy;
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
    };
  },
});
</script>

<style></style>
