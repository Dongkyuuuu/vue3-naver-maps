<script setup lang="ts">
import { onMounted, onUnmounted, provide, ref, useAttrs } from "vue";

import { useGlobalNaverMapOptions } from "@/composables/useGlobalNaverMapOptions";
import {
  LAYER_TABLE,
  NAVER_MAPS_INSTANCE_INJECT_KEY,
  NAVER_MAPS_SCRIPT_ID,
  UI_EVENT_MAP,
} from "@/constants";
import { createScript } from "@/lib";
import type { Layers, MapInitializeCallbacks, MapOptions } from "@/types";
import { addEventMap } from "@/utils";

const emits = defineEmits([...UI_EVENT_MAP, "onLoad"]);
const { initLayers = [], mapOptions = {} } = defineProps<{
  mapOptions?: MapOptions;
  initLayers?: Layers[];
}>();

const attrs = useAttrs();
const mapElement = ref<HTMLElement>();
const mapInstance = ref<naver.maps.Map>();
/** Map이 호출되기 이전에 하위컴포넌트에서 호출된 실행들이 있는경우 Map 호출 후 실행해줌 */
const mapCallbacks = ref<MapInitializeCallbacks>([]);
const globalOptions = useGlobalNaverMapOptions();

const handleAddCallback = (event: MapInitializeCallbacks[number]) => {
  mapCallbacks.value.push(event);
};

/** Map options setting */
const handleMapSetting = () => {
  const newMapOptions = mapOptions;
  const overlayType = initLayers.map((layer) => LAYER_TABLE[layer]).join(".");
  const setCenter = mapOptions.latitude && mapOptions.longitude;

  if (setCenter) {
    newMapOptions.center = new window.naver.maps.LatLng(
      mapOptions.latitude!,
      mapOptions.longitude!,
    );
  }

  return {
    ...newMapOptions,
    mapTypes: new window.naver.maps.MapTypeRegistry({
      normal: window.naver.maps.NaverStyleMapTypeOptions.getNormalMap({
        overlayType,
      }),
      satellite: window.naver.maps.NaverStyleMapTypeOptions.getSatelliteMap({
        overlayType,
      }),
      hybrid: window.naver.maps.NaverStyleMapTypeOptions.getHybridMap({
        overlayType,
      }),
      terrain: window.naver.maps.NaverStyleMapTypeOptions.getTerrainMap({
        overlayType,
      }),
    }),
  };
};

const initializeNaverMap = () => {
  mapInstance.value = new window.naver.maps.Map(
    mapElement.value!,
    handleMapSetting(),
  );

  addEventMap(emits, mapInstance.value);
  mapCallbacks.value.forEach((callback) => callback(mapInstance.value!));
  mapCallbacks.value = [];
  emits("onLoad", mapInstance.value);
};

onMounted(() => {
  const scripts = document.getElementById(NAVER_MAPS_SCRIPT_ID);
  if (scripts && window.naver?.maps) {
    initializeNaverMap();
  } else {
    createScript(globalOptions, initializeNaverMap);
  }
});
onUnmounted(() => {
  mapInstance.value?.destroy();
});

provide(NAVER_MAPS_INSTANCE_INJECT_KEY, {
  mapInstance,
  addCallback: handleAddCallback,
});
</script>

<template>
  <div ref="mapElement" v-bind="attrs">
    <slot />
  </div>
</template>
