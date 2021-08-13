<template>
  <div id="vue-naver-maps" :style="{ width: width, height: height }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  toRefs,
  ref,
  onBeforeMount,
  onUnmounted,
} from "vue";

import { useMap } from "@/apis";

/*

  NaverMap Init Methods

*/
const useMapInitOptions = () => {
  const mapLayers = (
    settings: naver.maps.MapOptions,
    initLayers: naver.vue3.initLayers
  ) => {
    const layers: naver.vue3.layers = {
      BACKGROUND: "bg",
      BACKGROUND_DETAIL: "ol",
      BICYCLE: "br",
      CADASTRAL: "lp",
      CTT: "ctt",
      HIKING_TRAIL: "ar",
      PANORAMA: "pr",
      POI_KOREAN: "lko",
      TRANSIT: "ts",
      KOREAN: "lko",
      ENGLISH: "len",
      CHINESE: "lzh",
      JAPANESE: "lja",
    };

    settings.mapTypes = new window.naver.maps.MapTypeRegistry({
      //@ts-ignore
      normal: window.naver.maps.NaverStyleMapTypeOptions.getNormalMap({
        overlayType: initLayers.map((layer) => layers[layer]).join("."),
      }),
    });

    return settings;
  };

  const mapSettings = (
    mapOptions: naver.vue3.mapOptions,
    initLayers: naver.vue3.initLayers
  ) => {
    const settings: naver.maps.MapOptions = {
      maxZoom: 21,
      minZoom: 0,
    };
    const mapOptionsLat = mapOptions.lat || mapOptions.lat === 0 ? true : false;
    const mapOptionsLng = mapOptions.lng || mapOptions.lng === 0 ? true : false;

    if (!mapOptionsLat || !mapOptionsLng) {
      settings.center = new window.naver.maps.LatLng(
        mapOptions.lat as number,
        mapOptions.lng as number
      );
    }

    if (initLayers.length < 1) return settings;
    else return mapLayers(settings, initLayers);
  };

  return {
    mapLayers,
    mapSettings,
  };
};

export default defineComponent({
  name: "Map",
  props: {
    width: { type: String, default: "400px" },
    height: { type: String, default: "400px" },
    mapOptions: {
      type: Object as PropType<naver.vue3.mapOptions>,
      required: true,
    },
    initLayers: {
      type: Array as PropType<naver.vue3.initLayers>,
      default: [],
    },
  },
  setup: (props, { emit }) => {
    const map = ref<naver.maps.Map | null>(null);
    const { setOptions } = useMap(map.value!);
    const { width, height, mapOptions, initLayers } = toRefs(props);
    const { mapLayers, mapSettings } = useMapInitOptions();

    const initNaverMap = () => {
      const settings = mapSettings(mapOptions.value, initLayers.value);
      map.value = new window.naver.maps.Map("vue-naver-maps", {
        ...settings,
        ...mapOptions.value,
      });
    };

    const loadNaverMap = () => {
      if (map.value) return;
      document.getElementById("vue3-naver-maps")!.onload = () => {
        window.naver.maps.onJSContentLoaded = () => initNaverMap();
      };
    };

    onBeforeMount(() => loadNaverMap());
    onUnmounted(() => (map.value = null));

    return {
      width,
      height,
    };
  },
});
</script>
