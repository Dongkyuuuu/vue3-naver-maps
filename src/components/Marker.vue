<script lang="ts" setup>
import {
  inject,
  ref,
  toRefs,
  useSlots,
  watch,
  onMounted,
  onUnmounted,
} from "vue";
import { MAPS_INSTANCE } from "@/config/keys";
import { UI_EVENT_OBJECT } from "@/assets/event";
import { getIcon } from "@/composables/useMarkerSettings";
import { addEventMarker } from "@/composables/useEvent";
import type { HtmlIcon } from "@/composables/useMarkerSettings";

const props = defineProps<{
  latitude: number;
  longitude: number;
  htmlIcon?: HtmlIcon;
}>();
const emits = defineEmits([...UI_EVENT_OBJECT, "onLoad"]);

const { latitude, longitude, htmlIcon } = toRefs(props);
const slots = useSlots();
const map = inject(MAPS_INSTANCE)!;
const marker = ref<naver.maps.Marker>();
const markerRef = ref<HTMLElement>();

const getMarkerInstance = () => {
  marker.value = new naver.maps.Marker({
    position: new naver.maps.LatLng(latitude.value, longitude.value),
    map: map.value,
    icon: getIcon(slots.default as any, htmlIcon?.value),
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
      new naver.maps.LatLng(newOption.latitude, newOption.longitude)
    );
  },
  { immediate: false, deep: true }
);

onMounted(() => getMarkerInstance());
onUnmounted(() => marker.value!.setMap(null));
</script>

<template>
  <div v-if="map" ref="markerRef">
    <slot></slot>
  </div>
</template>
