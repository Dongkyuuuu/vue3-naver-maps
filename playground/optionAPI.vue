<template>
  <naver-maps
    width="100%"
    height="600px"
    @onLoad="loadMap($event)"
  ></naver-maps>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { naverV3 } from "vue3-naver-maps";
import {
  NaverMaps,
  NaverMarker,
  NaverInfoWindow,
  NaverCircle,
  NaverEllipse,
  NaverRectangle,
  NaverPolygon,
  NaverPolyline,
} from "vue3-naver-maps";
export default defineComponent({
  components: { NaverMaps, NaverPolyline },
  data() {
    return {
      map: undefined as naver.maps.Map | undefined,
      geo: new window.naver.maps.LatLng(37, 127),
    };
  },
  methods: {
    loadMap(mapObject: naver.maps.Map) {
      this.map = mapObject;
      console.log(this.map);
    },
  },
});
</script>
