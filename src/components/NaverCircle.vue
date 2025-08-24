<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

import { useNaverMapInstance } from "@/composables/useNaverMapInstance";
import { UI_EVENT_CIRCLE } from "@/constants";
import { addEventCircle } from "@/utils";

const emits = defineEmits([...UI_EVENT_CIRCLE, "onLoad"]);
const {
  latitude,
  longitude,
  options = {},
  radius = 100,
} = defineProps<{
  latitude: number;
  longitude: number;
  radius?: number;
  options?: naver.maps.CircleOptions;
}>();

const circle = ref<naver.maps.Circle>();
const { mapInstance, addCallback } = useNaverMapInstance();

/** Setup CircleInstance */
const initializeCircle = (map: naver.maps.Map) => {
  circle.value = new window.naver.maps.Circle({
    map: map,
    center: new window.naver.maps.LatLng(latitude, longitude),
    radius,
    ...options,
  });

  addEventCircle(emits, circle.value);
  emits("onLoad", circle.value);
};

onMounted(() =>
  mapInstance.value
    ? initializeCircle(mapInstance.value)
    : addCallback(initializeCircle),
);
onUnmounted(() => circle.value && circle.value.setMap(null));
</script>

<template>
  <div></div>
</template>
