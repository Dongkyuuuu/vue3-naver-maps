<template>
  <naver-maps
    :width="mapSize.width"
    :height="mapSize.height"
    @updateMap="loadMap($event)"
    :mapOptions="mapOptions"
    :initLayers="initLayers"
  >
  </naver-maps>
  {{ mapOptions }}
  <br />
  <br />
  <br />
  {{ initLayers }}
  <button @click="change()">2323</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { naverV3 } from "../dist/vue3-naver-maps";

export default defineComponent({
  name: "App",
  setup: () => {
    const map = ref<naver.maps.Map | null>(null);
    const mapSize = reactive({
      width: "400px",
      height: "400px",
    });
    const mapOptions = ref<naverV3.mapOptions>({
      lat: 37,
      lng: 127,
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
      console.log(map.value.getCenter());
      console.log(`[vue3-naver-maps] map is load!`);
    };

    const change = () => {
      // const { setOptions, getCenter } = useMap(map.value!);
      // const options: naverV3.mapOptions = {
      //   lat: 37,
      //   lng: 127,
      //   zoom: 18,
      //   zoomControl: false,
      //   mapTypeControl: false,
      // };
      // map.value!.setOptions(options);
      initLayers.value = [
        "BACKGROUND",
        "BACKGROUND_DETAIL",
        // "POI_KOREAN",
        "TRANSIT",
        // "ENGLISH",
      ];
      // mapSize.width = "700px";
      // mapOptions.value = {
      //   lat: 37,
      //   lng: 127,
      //   zoom: 9,
      //   zoomControl: false,
      //   zoomControlOptions: { position: "TOP_RIGHT" },
      //   mapTypeControl: false,
      // };
    };
    return { mapOptions, initLayers, loadMap, change, mapSize };
  },
});
</script>

<style></style>
