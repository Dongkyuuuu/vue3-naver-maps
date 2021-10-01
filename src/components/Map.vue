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
  inject,
  onBeforeMount,
} from "vue";
import { useMapInitOptions, addEventMap, UI_EVENT_MAP } from "../utils";
import { naverMapObject, installOptions, isSSR } from "../injectionKeys";
import { setupScript as setupNaverScript } from "../config/install";
import type { naverV3 } from "../types";

export default defineComponent({
  name: "Map",
  emits: ["onLoad", ...UI_EVENT_MAP],
  props: {
    width: { type: String, default: "400px" },
    height: { type: String, default: "400px" },
    mapOptions: {
      type: Object as PropType<naverV3.mapOptions>,
      default: { maxZoom: 21, minZoom: 0 },
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
    const { mapSettings, mapLayers } = useMapInitOptions();

    provide(naverMapObject, map);

    const createMap = () => {
      map.value = new window.naver.maps.Map(mapRef.value!, {
        ...mapSettings(mapOptions.value),
        ...mapLayers(initLayers.value),
      });
      // add map UI event
      addEventMap(emit, map.value);
      emit("onLoad", map.value);
    };

    const createMapAfterScriptLoaded = () => {
      document.getElementById("vue3-naver-maps")!.onload = () => {
        window.naver.maps.onJSContentLoaded = () => createMap();
      };
    };

    watchEffect(() => {
      if (!map.value) return;

      map.value!.setOptions({
        ...mapSettings(mapOptions.value),
        ...mapLayers(initLayers.value),
      });
    });

    onBeforeMount(() => {
      // SSR script install
      inject(isSSR)! ? setupNaverScript(inject(installOptions)!) : "";
    });
    onMounted(() => {
      window.naver ? createMap() : createMapAfterScriptLoaded();
    });
    onUnmounted(() => {
      map.value!.destroy();
    });

    return {
      width,
      height,
      mapRef,
    };
  },
});
</script>
