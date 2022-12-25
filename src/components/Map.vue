<script setup lang="ts">
import { onMounted, onUnmounted, ref, useAttrs, toRefs } from "vue";
import { useSetupScript } from "@/composables/useSetup";
import { mapInstance, mapCallbackList, mapIsLoaded } from "@/stores";
import { LAYER_TABLE } from "@/constants/tables";

import type { MapOptions, Layers } from "@/types";

defineEmits<{}>();
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
      options.latitude!
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
  mapIsLoaded.value = true;
  mapCallbackList.value.map((item) => item(mapInstance.value!));
  mapCallbackList.value = [];

  onUnmounted(() => {
    mapInstance.value?.destroy();
    mapInstance.value = undefined;
    mapIsLoaded.value = false;
  });
};

onMounted(() => (window.naver ? useInitMap() : useSetupScript(useInitMap)));
</script>

<template>
  <div ref="mapElement" v-bind="attrs">
    <slot />
  </div>
</template>
