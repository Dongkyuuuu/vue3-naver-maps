<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

import { useNaverMapInstance } from "@/composables/useNaverMapInstance";
import { UI_EVENT_POLYLINE } from "@/constants";
import { addEventPolyline } from "@/utils";

const emits = defineEmits([...UI_EVENT_POLYLINE, "onLoad"]);
const { path, options = {} } = defineProps<{
  path: naver.maps.PolylineOptions["path"];
  options?: naver.maps.PolylineOptions;
}>();

const polyline = ref<naver.maps.Polyline>();
const { mapInstance, addCallback } = useNaverMapInstance();

/** Setup polyline Instance */
const initializePolyline = (map: naver.maps.Map) => {
  polyline.value = new window.naver.maps.Polyline({
    map: map,
    path,
    ...options,
  });

  addEventPolyline(emits, polyline.value);
  emits("onLoad", polyline.value);
};

onMounted(() =>
  mapInstance.value
    ? initializePolyline(mapInstance.value)
    : addCallback(initializePolyline),
);
onUnmounted(() => polyline.value && polyline.value.setMap(null));
</script>

<template>
  <div></div>
</template>
