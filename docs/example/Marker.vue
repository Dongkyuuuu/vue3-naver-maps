<template>
  <naver-maps width="100%">
    <naver-marker
      :latitude="37.56663888630603"
      :longitude="126.97838310403904"
      @onLoad="onLoadMarker($event)"
    >
      <!-- Html Icon  -->
    </naver-marker>
  </naver-maps>
</template>

<script>
import { ref } from "vue";
import { NaverMaps, NaverMarker } from "../../dist/vue3-naver-maps";

export default {
  components: { NaverMaps, NaverMarker },
  setup: () => {
    const marker = ref();
    const onLoadMarker = (markerObject) => {
      marker.value = markerObject;
    };

    return { onLoadMarker };
  },
};
</script>
