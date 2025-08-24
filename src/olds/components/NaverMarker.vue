<script setup lang="ts">
import { onMounted, onUnmounted, ref, toRefs } from "vue";
import { addEventMarker } from "@/composables/useEvent";
import { useLoad } from "@/composables/useLoad";
import { UI_EVENT_OBJECT } from "@/constants/events";
import { ERROR_NONE_MARKER_POSITION } from "@/constants/errors";

const emits = defineEmits([...UI_EVENT_OBJECT, "onLoad"]);
const props = defineProps<{
  latitude: number;
  longitude: number;
  htmlIcon?: naver.maps.HtmlIcon;
}>();

const { latitude, longitude, htmlIcon } = toRefs(props);
const marker = ref<naver.maps.Marker>();
const markerElement = ref<HTMLDivElement>();

const useMarkerIcon = () => {
  if (!markerElement.value?.childElementCount) return undefined; // default marker
  return Object.assign({ content: markerElement.value }, htmlIcon?.value ?? {});
};

/** Setup MarkerInstnace */
const useInitMarker = (map: naver.maps.Map) => {
  if (!latitude.value || !longitude.value)
    throw new Error(ERROR_NONE_MARKER_POSITION);

  marker.value = new window.naver.maps.Marker({
    map: map,
    icon: useMarkerIcon(),
    position: new window.naver.maps.LatLng(latitude.value, longitude.value),
  });

  addEventMarker(emits, marker.value);
  emits("onLoad", marker.value);
};

onMounted(() => useLoad(useInitMarker));
onUnmounted(() => {
  marker.value?.setMap(null);
  marker.value = undefined;
});
</script>

<template>
  <div ref="markerElement">
    <slot></slot>
  </div>
</template>
