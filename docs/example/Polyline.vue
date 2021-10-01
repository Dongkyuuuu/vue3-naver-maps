<template>
  <naver-maps
    width="100%"
    height="400px"
    :mapOptions="mapOptions"
    :initLayers="initLayers"
    @onLoad="onLoadMap($event)"
  >
    <naver-polyline :path="path" @onLoad="onLoadPolyline($event)" />
  </naver-maps>
</template>

<script>
import { ref } from "vue";
import { NaverMaps, NaverPolyline } from "../../dist/vue3-naver-maps.esm";

export default {
  components: { NaverMaps, NaverPolyline },
  setup: () => {
    const map = ref();
    const polyline = ref();
    const path = ref([
      { lat: 37.5670131, lng: 126.9797895 },
      { lat: 126.979215, lng: 37.5649555 },
    ]);
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
    const onLoadPolyline = (polylineObject) => {
      polyline.value = polylineObject;
    };

    return {
      map,
      mapOptions,
      initLayers,
      onLoadMap,
      onLoadPolyline,
      path,
    };
  },
};
</script>
