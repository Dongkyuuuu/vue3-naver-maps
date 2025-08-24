<script setup lang="ts">
import { onUnmounted, ref, watch } from "vue";

import { useNaverMapInstance } from "@/composables/useNaverMapInstance";
import { UI_EVENT_INFOWINDOW } from "@/constants";
import { NaverMapError } from "@/exceptions";
import { addEventInfoWindow } from "@/utils";

const emits = defineEmits([...UI_EVENT_INFOWINDOW, "onLoad"]);
const {
  marker,
  open,
  options = {},
} = defineProps<{
  marker: naver.maps.Marker;
  open: boolean;
  options?: naver.maps.InfoWindowOptions;
}>();

const infoWindow = ref<naver.maps.InfoWindow>();
const infoWindowElement = ref<HTMLDivElement>();
const { mapInstance, addCallback } = useNaverMapInstance();

const controlInfoWindow = () => {
  if (!infoWindow.value) {
    throw new NaverMapError("InfoWindow is not initialized");
  }

  if (open) infoWindow.value.open(mapInstance.value!, marker);
  else infoWindow.value.close();
};

/** Setup InfoWindow */
const initializeInfoWindow = () => {
  const infowindowOptions = Object.assign(
    { content: infoWindowElement.value ?? "" },
    options,
  );
  infoWindow.value = new window.naver.maps.InfoWindow(infowindowOptions);

  controlInfoWindow();
  addEventInfoWindow(emits, infoWindow.value);
  emits("onLoad", infoWindow.value);
};

/** open infowindow trigger */
watch(
  () => open,
  () => controlInfoWindow(),
  { immediate: false },
);

/** marker check & create infowindow */
watch(
  () => marker,
  () => {
    if (!marker) return;
    mapInstance.value
      ? initializeInfoWindow()
      : addCallback(initializeInfoWindow);
  },
  { immediate: false },
);

onUnmounted(() => infoWindow.value && infoWindow.value.close());
</script>

<template>
  <div ref="infoWindowElement">
    <slot></slot>
  </div>
</template>
