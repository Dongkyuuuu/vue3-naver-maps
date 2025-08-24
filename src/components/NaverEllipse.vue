<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

import { useNaverMapInstance } from "@/composables/useNaverMapInstance";
import { UI_EVENT_ELLIPSE } from "@/constants";
import { addEventEllipse } from "@/utils";

const emits = defineEmits([...UI_EVENT_ELLIPSE, "onLoad"]);
const { bounds, options = {} } = defineProps<{
  bounds: naver.maps.Bounds | naver.maps.BoundsLiteral;
  options?: naver.maps.EllipseOptions;
}>();

const ellipse = ref<naver.maps.Ellipse>();
const { mapInstance, addCallback } = useNaverMapInstance();

/** Setup Ellipse Instance */
const initializeEllipse = (map: naver.maps.Map) => {
  ellipse.value = new window.naver.maps.Ellipse({
    map: map,
    bounds,
    ...options,
  });

  addEventEllipse(emits, ellipse.value);
  emits("onLoad", ellipse.value);
};

onMounted(() =>
  mapInstance.value
    ? initializeEllipse(mapInstance.value)
    : addCallback(initializeEllipse),
);
onUnmounted(() => ellipse.value && ellipse.value.setMap(null));
</script>

<template>
  <div></div>
</template>
