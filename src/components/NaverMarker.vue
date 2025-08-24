<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

import { useNaverMapInstance } from "@/composables/useNaverMapInstance";
import { UI_EVENT_OBJECT } from "@/constants";
import { NaverMapError } from "@/exceptions";
import { addEventMarker } from "@/utils";

const emits = defineEmits([...UI_EVENT_OBJECT, "onLoad"]);
const {
  latitude,
  htmlIcon = {},
  longitude,
} = defineProps<{
  latitude: number;
  longitude: number;
  htmlIcon?: naver.maps.HtmlIcon;
}>();

const marker = ref<naver.maps.Marker>();
const markerElement = ref<HTMLDivElement>();
const { mapInstance, addCallback } = useNaverMapInstance();

const getMarkerIcon = () => {
  if (!markerElement.value?.childElementCount) return undefined; // default marker
  return Object.assign({ content: markerElement.value }, htmlIcon);
};

/** Setup MarkerInstance */
const initializeMarker = (map: naver.maps.Map) => {
  if (!latitude || !longitude) {
    throw new NaverMapError("marker latitude, longitude is required");
  }

  marker.value = new window.naver.maps.Marker({
    map: map,
    icon: getMarkerIcon(),
    position: new window.naver.maps.LatLng(latitude, longitude),
  });

  addEventMarker(emits, marker.value);
  emits("onLoad", marker.value);
};

onMounted(() =>
  mapInstance.value
    ? initializeMarker(mapInstance.value)
    : addCallback(initializeMarker),
);
onUnmounted(() => {
  marker.value?.setMap(null);
  marker.value = undefined;
});
</script>

<template>
  <div ref="markerElement">
    <slot />
  </div>
</template>
