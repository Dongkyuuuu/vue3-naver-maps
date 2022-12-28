<script setup lang="ts">
import { onUnmounted, toRefs, ref, watch } from "vue";
import { mapInstance } from "@/stores";
import { useLoad } from "@/composables/useLoad";
import { addEventInfoWindow } from "@/composables/useEvent";
import { UI_EVENT_INFOWINDOW } from "@/constants/events";
import {
  ERROR_NONE_INFOWINDOW,
  ERROR_MAP_IS_NOT_DEFINED,
} from "@/constants/errors";

const emits = defineEmits([...UI_EVENT_INFOWINDOW, "onLoad"]);
const props = defineProps<{
  marker: naver.maps.Marker;
  open: boolean;
  options?: naver.maps.InfoWindowOptions;
}>();

const { marker, options, open } = toRefs(props);
const infoWindow = ref<naver.maps.InfoWindow>();
const infoWindowElement = ref<HTMLDivElement>();

const useControlInfoWindow = () => {
  if (!mapInstance.value) throw new Error(ERROR_MAP_IS_NOT_DEFINED);
  if (!infoWindow.value) throw new Error(ERROR_NONE_INFOWINDOW);

  if (open.value) infoWindow.value.open(mapInstance.value, marker.value);
  else infoWindow.value.close();
};

/** Setup InfoWindow */
const useInitInfoWindow = () => {
  const infowindowOptions = Object.assign(
    { content: infoWindowElement.value ?? "" },
    options?.value ?? {}
  );
  infoWindow.value = new window.naver.maps.InfoWindow(infowindowOptions);

  useControlInfoWindow();
  addEventInfoWindow(emits, infoWindow.value);
  emits("onLoad", infoWindow.value);
};

/** open infowindow trigger */
watch(
  () => open.value,
  () => useControlInfoWindow(),
  { immediate: false }
);

/** marker check & create infowindow */
watch(
  () => marker.value,
  () => marker.value && useLoad(useInitInfoWindow),
  { immediate: false }
);

onUnmounted(() => infoWindow.value && infoWindow.value.close());
</script>

<template>
  <div ref="infoWindowElement">
    <slot></slot>
  </div>
</template>
