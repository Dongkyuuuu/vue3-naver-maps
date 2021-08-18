<template>
  <naver-maps
    width="400px"
    height="400px"
    :mapOptions="mapOptions"
    :initLayers="initLayers"
  />
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "App",
  setup: () => {
    const mapOptions = reactive({
      lat: 37,
      lng: 127,
      zoom: 10,
      zoomControl: true,
      zoomControlOptions: { position: "TOP_RIGHT" },
      mapTypeControl: true,
    });
    const initLayers = ref([
      "BACKGROUND",
      "BACKGROUND_DETAIL",
      "POI_KOREAN",
      "TRANSIT",
      "ENGLISH",
      "CHINESE",
      "JAPANESE",
    ]);
    return { mapOptions, initLayers };
  },
});
</script>

<style></style>
