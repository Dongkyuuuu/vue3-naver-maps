<template>
  <naver-maps
    width="100%"
    height="400px"
    :mapOptions="mapOptions"
    :initLayers="initLayers"
    @onLoad="onLoadMap($event)"
  >
    <naver-custom-overlay
      :latitude="37.56663888630603"
      :longitude="126.97838310403904"
      @onLoad="onLoadCustomOverlay($event)"
    >
      <div
        style="
          width: 200px;
          height: 100px;
          background-color: white;
          border: 1px solid gray;
        "
      >
        hello, CustomOverlay😎
      </div>
    </naver-custom-overlay>
  </naver-maps>
</template>

<script>
import { ref } from "vue";
import { NaverMaps, NaverCustomOverlay } from "../../dist/vue3-naver-maps.esm";

export default {
  components: { NaverMaps, NaverCustomOverlay },
  setup: () => {
    const map = ref();
    const customOverlay = ref();
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
    const onLoadCustomOverlay = (customOverlayObject) => {
      customOverlay.value = customOverlayObject;
    };

    return {
      map,
      mapOptions,
      initLayers,
      onLoadMap,
      customOverlay,
      onLoadCustomOverlay,
    };
  },
};
</script>
