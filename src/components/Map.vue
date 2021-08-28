<template>
  <div id="naver-maps" :style="{ width: width, height: height }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  toRefs,
  ref,
  onUnmounted,
  onMounted,
  watch,
} from "vue";
import { useMapInitOptions } from "../utils";
import type { naverV3 } from "../types";

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
      type: Array as PropType<naverV3.initLayer[]>,
      default: [],
    },
  },
  emits: ["updateMap"],
  setup: (props, { emit }) => {
    const map = ref<naver.maps.Map | null>(null);
    const { width, height, mapOptions, initLayers } = toRefs(props);
    const { mapSettings } = useMapInitOptions();

    const initNaverMap = () => {
      const settings = mapSettings(mapOptions.value, initLayers.value);
      map.value = new window.naver.maps.Map("naver-maps", {
        ...settings,
        ...mapOptions.value,
      });
      emit("updateMap", map.value);
    };

    /**
     * Props mapOptions watch
     */
    watch(
      () => mapOptions.value,
      (newMaptions: naverV3.mapOptions, oldMaptions: naverV3.mapOptions) => {
        map.value!.setOptions(newMaptions);
      },
      { deep: true, immediate: false }
    );

    /**
     * Props initLayers watch
     */
    watch(
      () => initLayers.value,
      (
        newInitLayers: naverV3.initLayer[],
        oldInitLayers: naverV3.initLayer[]
      ) => {
        const options = mapSettings(map.value!.getOptions(), newInitLayers);
        map.value!.setOptions(options);
      },
      { deep: true, immediate: false }
    );

    onMounted(() => {
      if (!window.naver) {
        document.getElementById("vue3-naver-maps")!.onload = () => {
          window.naver.maps.onJSContentLoaded = () => initNaverMap();
        };
      } else {
        initNaverMap();
      }
    });
    onUnmounted(() => (map.value = null));

    return {
      width,
      height,
    };
  },
});
</script>
