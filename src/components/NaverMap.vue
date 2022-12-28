<script setup lang="ts">
import { onMounted, onUnmounted, ref, useAttrs, toRefs } from "vue";
import { mapInstance, mapCallbackList, mapIsLoaded } from "@/stores";
import { addEventMap } from "@/composables/useEvent";
import { useSetupScript } from "@/composables/useSetup";
import { LAYER_TABLE } from "@/constants/tables";
import { UI_EVENT_MAP } from "@/constants/events";

import type { MapOptions, Layers } from "@/types";

const emits = defineEmits([...UI_EVENT_MAP, "onLoad"]);
const props = defineProps<{
  mapOptions?: MapOptions;
  initLayers?: Layers[];
}>();

const attrs = useAttrs();
const mapElement = ref<HTMLDivElement>();
const { initLayers, mapOptions } = toRefs(props);

/** Get map options */
const useMapSettings = (): naver.maps.MapOptions => {
  const options = mapOptions?.value ?? {};
  const layers = initLayers?.value ?? [];

  const overlayType = layers.map((layer) => LAYER_TABLE[layer]).join(".");
  const setCetner = options.latitude && options.longitude && true;

  if (setCetner) {
    options.center = new window.naver.maps.LatLng(
      options.latitude!,
      options.longitude!
    );
  }

  return {
    ...options,
    mapTypes: new window.naver.maps.MapTypeRegistry({
      normal: window.naver.maps.NaverStyleMapTypeOptions.getNormalMap({
        overlayType: overlayType,
      }),
      satellite: window.naver.maps.NaverStyleMapTypeOptions.getSatelliteMap({
        overlayType: overlayType,
      }),
      hybrid: window.naver.maps.NaverStyleMapTypeOptions.getHybridMap({
        overlayType: overlayType,
      }),
      terrain: window.naver.maps.NaverStyleMapTypeOptions.getTerrainMap({
        overlayType: overlayType,
      }),
    }),
  };
};

/** Setup MapInstance */
const useInitMap = () => {
  mapInstance.value = new window.naver.maps.Map(
    mapElement.value!,
    useMapSettings()
  );
  addEventMap(emits, mapInstance.value); // add event
  mapIsLoaded.value = true;
  mapCallbackList.value.map((item) => item(mapInstance.value!));
  mapCallbackList.value = [];

  emits("onLoad", mapInstance.value);
};

onMounted(() => {
  window.naver ? useInitMap() : useSetupScript(useInitMap);
});
onUnmounted(() => {
  mapInstance.value?.destroy();
  mapInstance.value = undefined;
  mapIsLoaded.value = false;
});
</script>

<template>
  <div ref="mapElement" v-bind="attrs">
    <slot></slot>
  </div>
</template>
