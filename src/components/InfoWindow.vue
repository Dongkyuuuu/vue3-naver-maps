<script lang="ts" setup>
import { ref, toRefs, useSlots, watch, onMounted, onUnmounted } from "vue";
import { mapInstance } from "@/store";
import { UI_EVENT_INFOWINDOW } from "@/assets/event";
import { addEventInfoWindow } from "@/composables/useEvent";

const props = defineProps<{
  marker: naver.maps.Marker;
  open: boolean;
  options?: naver.maps.InfoWindowOptions;
}>();
const emits = defineEmits([...UI_EVENT_INFOWINDOW, "onLoad"]);

const { marker, open, options } = toRefs(props);
const slots = useSlots();
const infoWindow = ref<naver.maps.InfoWindow>();

const setInfoWindow = (open: boolean) => {
  if (!infoWindow.value) throw new Error("InfoWindow is not initialized");
  if (!mapInstance.value) throw new Error("Map is not initialized");

  if (open) infoWindow.value.open(mapInstance.value, marker.value);
  else infoWindow.value.close();
};
const getInfoWindowInstance = () => {
  infoWindow.value = new naver.maps.InfoWindow(
    Object.assign(
      {
        content: slots.default as any,
      },
      options?.value ?? {}
    )
  );

  addEventInfoWindow(emits, infoWindow.value); // InfoWindow Event Listener
  emits("onLoad", infoWindow.value);
};

watch(
  () => open.value,
  (newValue) => {
    setInfoWindow(newValue);
  },
  { immediate: false }
);

onMounted(() => getInfoWindowInstance());
onUnmounted(() => infoWindow.value!.close());
</script>

<template>
  <div v-if="marker">
    <slot></slot>
  </div>
</template>
