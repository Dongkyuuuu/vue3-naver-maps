<template>
  <div ref="mapRef" :style="{ width: width, height: height }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  toRefs,
  ref,
  onMounted,
  onUnmounted,
  watchEffect,
  provide,
} from "vue";
import { useMapInitOptions, naverMapObject } from "../utils";
import type { naverV3 } from "../types";

export default defineComponent({
  name: "Map",
  emits: ["onLoad"],
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
  setup: (props, { emit }) => {
    const map = ref<naver.maps.Map | null>(null);
    const mapRef = ref<HTMLDivElement | null>(null);
    const { width, height, mapOptions, initLayers } = toRefs(props);
    const { mapSettings } = useMapInitOptions();

    provide(naverMapObject, map);

    const createMap = () => {
      const settings = mapSettings(mapOptions.value, initLayers.value);
      map.value = new window.naver.maps.Map(mapRef.value!, {
        ...settings,
        ...mapOptions.value,
      });

      emit("onLoad", map.value);
    };

    const createMapAfterScriptLoaded = () => {
      document.getElementById("vue3-naver-maps")!.onload = () => {
        window.naver.maps.onJSContentLoaded = () => createMap();
      };
    };

    watchEffect(() => {
      if (!map.value) return;

      const settings = mapSettings(mapOptions.value, initLayers.value);
      map.value!.setOptions({ ...settings, ...mapOptions.value });
    });

    onMounted(() =>
      window.naver ? createMap() : createMapAfterScriptLoaded()
    );
    onUnmounted(() => {
      map.value = null;
      mapRef.value = null;
    });

    return {
      width,
      height,
      mapRef,
    };
  },
});
</script>
