<script lang="ts" setup>
import { ref, inject, onMounted, onUnmounted, toRefs } from "vue";
import { addEventCircle } from "@/composables/useEvent";
import { UI_EVENT_CIRCLE } from "@/assets/event";
import { MAPS_INSTANCE } from "@/config/keys";

const props = defineProps<{
  latitude: number;
  longitude: number;
  radius?: number;
  options?: naver.maps.CircleOptions;
}>();
const emits = defineEmits(["onLoad", ...UI_EVENT_CIRCLE]);

const { latitude, longitude, radius, options } = toRefs(props);
const map = inject(MAPS_INSTANCE)!;
const circle = ref<naver.maps.Circle>();

const getCircleInstance = () => {
  const circleOption = {
    map: map.value,
    center: new window.naver.maps.LatLng(latitude.value, longitude.value),
    radius: radius?.value ?? 0,
  };
  circle.value = new window.naver.maps.Circle(
    Object.assign(circleOption, options?.value ?? {})
  );

  addEventCircle(emits, circle.value);
  emits("onLoad", circle.value);
};

onMounted(() => getCircleInstance());
onUnmounted(() => circle.value!.setMap(null));
</script>

<template></template>
