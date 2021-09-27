<template>
  <naver-maps
    width="100%"
    height="400px"
    :mapOptions="mapOptions"
    :initLayers="initLayers"
    @onLoad="onLoadMap($event)"
  >
    <naver-ellipse :bounds="ellipseBound" @onLoad="onLoadEllipse($event)" />
  </naver-maps>
</template>

<script>
import { ref } from "vue";
import { NaverMaps, NaverEllipse } from "../../dist/vue3-naver-maps";

export default {
  components: { NaverMaps, NaverEllipse },
  setup: () => {
    const map = ref();
    const ellipse = ref();
    const ellipseBound = ref({
      south: 36,
      north: 38,
      west: 126,
      east: 128,
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
    const onLoadEllipse = (ellipseObject) => {
      ellipse.value = ellipseObject;
    };

    return {
      map,
      mapOptions,
      initLayers,
      onLoadMap,
      onLoadEllipse,
      ellipseBound,
    };
  },
};
</script>
