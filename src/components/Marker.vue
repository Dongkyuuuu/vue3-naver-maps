<script lang="ts" setup>
import { ref, toRefs, watch, onMounted, onUnmounted } from "vue";
import { UI_EVENT_OBJECT } from "@/assets/event";
import { getIcon } from "@/composables/useMarkerSettings";
import { addEventMarker } from "@/composables/useEvent";
import { useLoad } from "@/composables/useLoad";
import type { HtmlIcon } from "@/composables/useMarkerSettings";

const props = defineProps<{
  latitude: number;
  longitude: number;
  htmlIcon?: HtmlIcon;
}>();
const emits = defineEmits([...UI_EVENT_OBJECT, "onLoad"]);

const { latitude, longitude, htmlIcon } = toRefs(props);
const marker = ref<naver.maps.Marker>();
const markerRef = ref<HTMLElement>();

const getMarkerInstance = (map: naver.maps.Map) => {
  marker.value = new window.naver.maps.Marker({
    position: new window.naver.maps.LatLng(latitude.value, longitude.value),
    map: map,
    icon: getIcon(markerRef.value, htmlIcon?.value),
  });

  addEventMarker(emits, marker.value); // Marker Event Listener
  emits("onLoad", marker.value);
};

// Update only latitude and longitude
// If you want to update icon options, use OnLoad(emit) Marker Instance
watch(
  () => props,
  (newOption) => {
    if (!marker.value) throw new Error("Marker is not initialized");
    marker.value.setPosition(
      new window.naver.maps.LatLng(newOption.latitude, newOption.longitude)
    );
  },
  { immediate: false, deep: true }
);

onMounted(() => useLoad(getMarkerInstance));
onUnmounted(() => marker.value!.setMap(null));
</script>

<template>
  <div ref="markerRef">
    <slot></slot>
  </div>
</template>
