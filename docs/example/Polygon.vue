<template>
  <naver-maps
    width="100%"
    height="400px"
    :mapOptions="mapOptions"
    :initLayers="initLayers"
    @onLoad="onLoadMap($event)"
  >
    <naver-polygon :paths="paths" @onLoad="onLoadPolygon($event)" />
  </naver-maps>
</template>

<script>
import { ref } from "vue";
import { NaverMaps, NaverPolygon } from "../../dist/vue3-naver-maps.esm";

export default {
  components: { NaverMaps, NaverPolygon },
  setup: () => {
    const map = ref();
    const polygon = ref();
    const paths = ref([
      [126.9797895, 37.5670131],
      [126.979215, 37.5649555],
      [126.9766789, 37.5649082],
      [126.9789515, 37.5637645],
      [126.9785598, 37.5614914],
      [126.9804949, 37.5632666],
      [126.9827689, 37.5619065],
      [126.9818039, 37.5639213],
      [126.9837414, 37.5653719],
      [126.9811162, 37.5651081],
    ]);
    const mapOptions = {
      latitude: 37.56663888630603, // 지도 중앙 위도
      longitude: 126.97838310403904, // 지도 중앙 경도
      zoom: 15,
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
    const onLoadPolygon = (polygonObject) => {
      polygon.value = polygonObject;
    };

    return {
      map,
      mapOptions,
      initLayers,
      onLoadMap,
      onLoadPolygon,
      paths,
    };
  },
};
</script>
