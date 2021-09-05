<template>
  <naver-map
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
      안녕하세요
    </naver-marker>
  </naver-map>
  <br />
  <br />
  <br />
  {{ mapOptions }}
  <button @click="change()">2323</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import type { naverV3 } from "../dist/vue3-naver-maps";

export default defineComponent({
  name: "App",
  setup: () => {
    const map = ref<naver.maps.Map | null>(null);
    const mapSize = reactive({
      width: "400px",
      height: "400px",
    });
    const mapOptions = ref<naverV3.mapOptions>({
      latitude: 36,
      longitude: 126,
      zoom: 12,
      zoomControl: false,
      zoomControlOptions: { position: "TOP_RIGHT" },
      mapTypeControl: false,
    });
    const initLayers = ref([
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
    const loadMarker = (marker: naver.maps.Marker) => {
      console.log(marker);
    };
    const testFunc = (event: any) => {
      console.log(event);
    };

    const change = () => {
      initLayers.value = [
        "BACKGROUND",
        "BACKGROUND_DETAIL",
        // "POI_KOREAN",
        "TRANSIT",
        "ENGLISH",
      ];
      mapOptions.value.zoom = 14;

      // map.value?.setCenter(new window.naver.maps.LatLng(36, 127));
    };
    return {
      mapOptions,
      initLayers,
      loadMap,
      change,
      mapSize,
      map,
      loadMarker,
    };
  },
});
</script>

<style></style>
