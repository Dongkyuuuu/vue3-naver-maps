<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

import { useNaverMapInstance } from "@/composables/useNaverMapInstance";
import { UI_EVENT_POLYGON } from "@/constants";
import { addEventPolygon } from "@/utils";

const emits = defineEmits([...UI_EVENT_POLYGON, "onLoad"]);
const { options = {}, paths } = defineProps<{
  paths: naver.maps.PolygonOptions["paths"];
  options?: naver.maps.PolygonOptions;
}>();

const polygon = ref<naver.maps.Polygon>();
const { mapInstance, addCallback } = useNaverMapInstance();

/** Setup polygon Instance */
const initializePolygon = (map: naver.maps.Map) => {
  polygon.value = new window.naver.maps.Polygon({
    map: map,
    paths,
    ...options,
  });

  addEventPolygon(emits, polygon.value);
  emits("onLoad", polygon.value);
};

onMounted(() =>
  mapInstance.value
    ? initializePolygon(mapInstance.value)
    : addCallback(initializePolygon),
);
onUnmounted(() => polygon.value && polygon.value.setMap(null));
</script>

<template>
  <div></div>
</template>
