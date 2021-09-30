<template>
  <naver-maps
    width="100%"
    height="400px"
    :mapOptions="mapOptions"
    :initLayers="initLayers"
    @onLoad="onLoadMap($event)"
  >
    <naver-rectangle
      :bounds="rectangleBound"
      @onLoad="onLoadRectangle($event)"
    />
  </naver-maps>
</template>

<script>
import { ref } from "vue";
import { NaverMaps, NaverRectangle } from "../../dist/vue3-naver-maps.esm";

export default {
  components: { NaverMaps, NaverRectangle },
  setup: () => {
    const map = ref();
    const rectangle = ref();
    const rectangleBound = ref({
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
    const onLoadRectangle = (rectangleObject) => {
      rectangle.value = rectangleObject;
    };

    return {
      map,
      mapOptions,
      initLayers,
      onLoadMap,
      rectangleBound,
      onLoadRectangle,
    };
  },
};
</script>
