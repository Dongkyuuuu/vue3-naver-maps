<script lang="ts" setup>
import {
  ref,
  toRefs,
  inject,
  provide,
  onMounted,
  watch,
  computed,
  onUnmounted,
} from "vue";
import installer, { NAVER_MAP_ELEMENT_ID } from "@/config/installer";
import { MapSettings } from "@/composables/useMapSettings";
import { addEventMap } from "@/composables/useEvent";
import { UI_EVENT_MAP } from "@/assets/event";
import {
  MAPS_IS_SSR,
  MAPS_INSTALL_OPTIONS,
  MAPS_INSTANCE,
} from "@/config/keys";
import type { Layers, MapOptions } from "@/composables/useMapSettings";

const props = defineProps<{
  mapOptions?: MapOptions;
  initLayers?: Layers[];
}>();
const emits = defineEmits([...UI_EVENT_MAP, "onLoad"]);

const { mapOptions, initLayers } = toRefs(props);
const mapRef = ref<HTMLElement>();
const map = ref<naver.maps.Map>();
const isSSR = inject(MAPS_IS_SSR);
const installOptions = inject(MAPS_INSTALL_OPTIONS);
const useMapSettings = new MapSettings(initLayers?.value, mapOptions?.value);

// If SSR, create naver map script
if (isSSR) installer.ssrInstall(installOptions!);

const getMapInstance = () => {
  const options = useMapSettings.getSettings();
  map.value = new window.naver.maps.Map(mapRef.value!, options);
  addEventMap(emits, map.value); // Map Event Listener
  provide(
    MAPS_INSTANCE,
    computed(() => map.value)
  );
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

onMounted(() => (window.naver ? getMapInstance() : waitScriptLoaded()));
onUnmounted(() => map.value!.destroy());
</script>

<template>
  <div ref="mapRef">
    <slot></slot>
  </div>
</template>
