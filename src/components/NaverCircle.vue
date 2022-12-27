<script setup lang="ts">
import { onMounted, onUnmounted, ref, toRefs } from "vue";
import { addEventCircle } from "@/composables/useEvent";
import { useLoad } from "@/composables/useLoad";
import { UI_EVENT_CIRCLE } from "@/constants/events";

const emits = defineEmits([...UI_EVENT_CIRCLE, "onLoad"]);
const props = defineProps<{
  latitude: number;
  longitude: number;
  radius?: number;
  options?: naver.maps.CircleOptions;
}>();

const { latitude, longitude, radius, options } = toRefs(props);
const circle = ref<naver.maps.Circle>();

/** Setup CircleInstnace */
const useInitCircle = (map: naver.maps.Map) => {
  circle.value = new window.naver.maps.Circle({
    map: map,
    center: new window.naver.maps.LatLng(latitude.value, longitude.value),
    radius: radius?.value ?? 100,
    ...options?.value,
  });

  addEventCircle(emits, circle.value);
  emits("onLoad", circle.value);
};

onMounted(() => useLoad(useInitCircle));
onUnmounted(() => circle.value && circle.value.setMap(null));
</script>

<template></template>
