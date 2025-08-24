<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

import { useNaverMapInstance } from "@/composables/useNaverMapInstance";
import { UI_EVENT_GROUNDOVERLAY } from "@/constants";
import { addEventGroundOverlay } from "@/utils";

const emits = defineEmits([...UI_EVENT_GROUNDOVERLAY, "onLoad"]);
const {
  url,
  bounds,
  options = {},
} = defineProps<{
  url: string;
  bounds: naver.maps.Bounds | naver.maps.BoundsLiteral;
  options?: naver.maps.GroundOverlayOptions;
}>();

const groundOverlay = ref<naver.maps.GroundOverlay>();
const { mapInstance, addCallback } = useNaverMapInstance();

/** Setup groundOverlay Instance */
const initGroundOverlay = (map: naver.maps.Map) => {
  groundOverlay.value = new window.naver.maps.GroundOverlay(url, bounds, {
    map: map,
    ...options,
  });

  addEventGroundOverlay(emits, groundOverlay.value);
  emits("onLoad", groundOverlay.value);
};

onMounted(() =>
  mapInstance.value
    ? initGroundOverlay(mapInstance.value)
    : addCallback(initGroundOverlay),
);
onUnmounted(() => groundOverlay.value && groundOverlay.value.setMap(null));
</script>

<template>
  <div></div>
</template>
