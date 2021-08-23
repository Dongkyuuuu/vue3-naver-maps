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
import { useMapInitOptions } from "../utils";
import type { naverV3 } from "../types";
// import { useMap } from "@/apis";

export default defineComponent({
  name: "Map",
  props: {
    width: { type: String, default: "400px" },
    height: { type: String, default: "400px" },
    mapOptions: {
      type: Object as PropType<naverV3.mapOptions>,
      required: true,
    },
    initLayers: {
      type: Array as PropType<naverV3.initLayers>,
      default: [],
    },
  },
  setup: (props, { emit }) => {
    const map = ref<naver.maps.Map | null>(null);
    // const { setOptions } = useMap(map.value!);
    const { width, height, mapOptions, initLayers } = toRefs(props);
    const { mapSettings } = useMapInitOptions();

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
