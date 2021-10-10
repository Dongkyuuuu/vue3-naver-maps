<template>
  <naver-maps
    width="100%"
    height="400px"
    :mapOptions="mapOptions"
    :initLayers="initLayers"
    @onLoad="onLoadMap($event)"
  >
    <naver-ground-overlay
      url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfyGZVXaUWqWHg_xYsNoMjKP2JbjXAIPoE-Q&usqp=CAU"
      :bound="groundOverlayBound"
      @onLoad="onLoadGroundOverlay($event)"
    />
  </naver-maps>
</template>

<script>
import { ref } from "vue";
import { NaverMaps, NaverGroundOverlay } from "../../dist/vue3-naver-maps.esm";

export default {
  components: { NaverMaps, NaverGroundOverlay },
  setup: () => {
    const map = ref();
    const groundOverlay = ref();
    const groundOverlayBound = ref({
      south: 37.566616443521745,
      north: 38.566616443521745,
      west: 126.97837068565364,
      east: 127.97837068565364,
    });
    const mapOptions = {
      latitude: 37.56663888630603, // 지도 중앙 위도
      longitude: 126.97838310403904, // 지도 중앙 경도
      zoom: 8,
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
    const onLoadGroundOverlay = (groundOverlayObject) => {
      groundOverlay.value = groundOverlayObject;
    };

    return {
      map,
      mapOptions,
      initLayers,
      onLoadMap,
      groundOverlay,
      groundOverlayBound,
      onLoadGroundOverlay,
    };
  },
};
</script>
