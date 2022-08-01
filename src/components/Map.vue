<script lang="ts" setup>
import { ref, toRefs, inject, onMounted, watch, onUnmounted } from "vue";
import { NAVER_MAP_ELEMENT_ID, createScript } from "@/config/installer";
import { MapSettings } from "@/composables/useMapSettings";
import { addEventMap } from "@/composables/useEvent";
import { UI_EVENT_MAP } from "@/assets/event";
import { MAPS_IS_SSR, MAPS_INSTALL_OPTIONS } from "@/config/keys";
import { mapInstance, mapsCallbackList } from "@/store";
import type { CSSProperties } from "vue";
import type { Layers, MapOptions } from "@/composables/useMapSettings";

const props = defineProps<{
  mapStyle?: CSSProperties;
  mapOptions?: MapOptions;
  initLayers?: Layers[];
}>();
const emits = defineEmits([...UI_EVENT_MAP, "onLoad"]);

const { mapOptions, initLayers, mapStyle } = toRefs(props);
const mapRef = ref<HTMLElement>();
const map = ref<naver.maps.Map>();
const isSSR = inject(MAPS_IS_SSR);
const installOptions = inject(MAPS_INSTALL_OPTIONS)!;
const useMapSettings = new MapSettings(initLayers?.value, mapOptions?.value);

// For Server-Side-Render, create script in Map component
// this function is called client level
if (isSSR) createScript(installOptions);

const getMapInstance = () => {
  const options = useMapSettings.getSettings();
  map.value = new window.naver.maps.Map(mapRef.value!, options);
  addEventMap(emits, map.value); // Map Event Listener
  mapInstance.value = map.value; // Map instance is ready
  // Create naver object before map initialization
  if (mapsCallbackList.value.length) {
    mapsCallbackList.value.forEach((callback) => callback(map.value!));
  }
  emits("onLoad", map.value);
};
const waitScriptLoaded = () => {
  const script = document.getElementById(NAVER_MAP_ELEMENT_ID);
  script!.onload = () => {
    window.naver.maps.onJSContentLoaded = () => getMapInstance();
  };
};

watch(
  () => props,
  (newOption) => {
    if (!map.value) throw new Error("Map is not initialized");
    useMapSettings.setSettings(newOption.initLayers, newOption.mapOptions);
    map.value!.setOptions(useMapSettings.getSettings());
  },
  { immediate: false, deep: true }
);

onMounted(() => (mapInstance.value ? getMapInstance() : waitScriptLoaded()));
onUnmounted(() => map.value!.destroy());
</script>

<template>
  <div ref="mapRef" :style="mapStyle">
    <slot></slot>
  </div>
</template>
