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
const map = inject(MAPS_INSTANCE)!;
const infoWindow = ref<naver.maps.InfoWindow>();

const setInfoWindow = (open: boolean) => {
  if (!infoWindow.value) return;

  if (open) infoWindow.value.open(map.value, marker.value);
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
    if (!infoWindow.value) return;
    setInfoWindow(newValue);
  },
  { immediate: false }
);

onMounted(() => getInfoWindowInstance());
onUnmounted(() => infoWindow.value!.close());
</script>

<template>
  <div v-if="map && marker">
    <slot></slot>
  </div>
</template>
