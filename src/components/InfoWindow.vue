<script lang="ts" setup>
import { ref, toRefs, watch, onUnmounted } from "vue";
import { mapInstance } from "@/store";
import { UI_EVENT_INFOWINDOW } from "@/assets/event";
import { addEventInfoWindow } from "@/composables/useEvent";
import { useLoad } from "@/composables/useLoad";

const props = defineProps<{
  marker: naver.maps.Marker;
  open: boolean;
  options?: naver.maps.InfoWindowOptions;
}>();
const emits = defineEmits([...UI_EVENT_INFOWINDOW, "onLoad"]);

const { marker, open, options } = toRefs(props);
const infoWindow = ref<naver.maps.InfoWindow>();
const contentRef = ref<HTMLElement>();

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
        content: contentRef.value ?? "",
      },
      options?.value ?? {}
    )
  );

  setInfoWindow(open.value);
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

watch(
  () => marker.value,
  (newValue) => {
    if (!newValue) return;
    useLoad(getInfoWindowInstance);
  }
);

onUnmounted(() => infoWindow.value!.close());
</script>

<template>
  <div ref="contentRef">
    <slot></slot>
  </div>
</template>
