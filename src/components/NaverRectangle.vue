<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

import { useNaverMapInstance } from "@/composables/useNaverMapInstance";
import { UI_EVENT_RECTANGLE } from "@/constants";
import { addEventRectangle } from "@/utils";

const emits = defineEmits([...UI_EVENT_RECTANGLE, "onLoad"]);
const { bounds, options = {} } = defineProps<{
  bounds: naver.maps.Bounds | naver.maps.BoundsLiteral;
  options?: naver.maps.RectangleOptions;
}>();

const rectangle = ref<naver.maps.Rectangle>();
const { mapInstance, addCallback } = useNaverMapInstance();

/** Setup rectangle Instance */
const initializeRectangle = (map: naver.maps.Map) => {
  rectangle.value = new window.naver.maps.Rectangle({
    map: map,
    bounds,
    ...options,
  });

  addEventRectangle(emits, rectangle.value);
  emits("onLoad", rectangle.value);
};

onMounted(() =>
  mapInstance.value
    ? initializeRectangle(mapInstance.value)
    : addCallback(initializeRectangle),
);
onUnmounted(() => rectangle.value && rectangle.value.setMap(null));
</script>

<template>
  <div></div>
</template>
