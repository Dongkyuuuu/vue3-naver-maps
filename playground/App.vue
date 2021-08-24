<template>
  <naver-maps
    width="804px"
    height="400px"
    @updateMap="loadMap($event)"
    :mapOptions="mapOptions"
    :initLayers="initLayers"
  />
  {{ mapOptions }}
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { naverV3, useMap } from "../dist/vue3-naver-maps";

export default defineComponent({
  name: "App",
  setup: () => {
    const map = ref<any>(null);
    const mapOptions: naverV3.mapOptions = {
      lat: 37,
      lng: 127,
      zoom: 10,
      zoomControl: false,
      zoomControlOptions: { position: "TOP_RIGHT" },
      mapTypeControl: false,
    };
    const initLayers = [
      "BACKGROUND",
      "BACKGROUND_DETAIL",
      "POI_KOREAN",
      "TRANSIT",
      "ENGLISH",
      "CHINESE",
      "JAPANESE",
    ];
    const loadMap = (mapObject: naver.maps.Map) => {
      map.value = mapObject;
      console.log(mapObject);
    };
    return { mapOptions, initLayers, loadMap };
  },
});
</script>

<style></style>
