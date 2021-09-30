<template>
  <naver-maps
    width="100%"
    height="400px"
    :mapOptions="mapOptions"
    :initLayers="initLayers"
    @onLoad="onLoadMap($event)"
  >
  </naver-maps>
</template>

<script>
import { ref } from "vue";
import { NaverMaps } from "../../dist/vue3-naver-maps.esm";

export default {
  components: { NaverMaps },
  setup: () => {
    const map = ref();
    const mapOptions = {
      latitude: 37.56663888630603, // 지도 중앙 위도
      longitude: 126.97838310403904, // 지도 중앙 경도
      zoom: 16,
      zoomControl: false,
      zoomControlOptions: { position: "TOP_RIGHT" },
    };
    const initLayers = [
      "BACKGROUND",
      "BACKGROUND_DETAIL",
      "POI_KOREAN",
      "TRANSIT",
      "ENGLISH",
    ];

    const onLoadMap = (mapObject) => {
      map.value = mapObject;
    };

    return {
      map,
      mapOptions,
      initLayers,
      onLoadMap,
    };
  },
};
</script>
