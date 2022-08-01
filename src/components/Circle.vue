<script lang="ts" setup>
import { ref, onMounted, onUnmounted, toRefs } from "vue";
import { addEventCircle } from "@/composables/useEvent";
import { UI_EVENT_CIRCLE } from "@/assets/event";
import { mapsCallbackList } from "@/store";

const props = defineProps<{
  latitude: number;
  longitude: number;
  radius?: number;
  options?: naver.maps.CircleOptions;
}>();
const emits = defineEmits(["onLoad", ...UI_EVENT_CIRCLE]);

const { latitude, longitude, radius, options } = toRefs(props);
const circle = ref<naver.maps.Circle>();

const getCircleInstance = (map: naver.maps.Map) => {
  const circleOption = {
    map: map,
    center: new window.naver.maps.LatLng(latitude.value, longitude.value),
    radius: radius?.value ?? 0,
  };
  circle.value = new window.naver.maps.Circle(
    Object.assign(circleOption, options?.value ?? {})
  );

  addEventCircle(emits, circle.value);
  emits("onLoad", circle.value);
};

onMounted(() => mapsCallbackList.value.push(getCircleInstance));
onUnmounted(() => circle.value!.setMap(null));
</script>

<template></template>
