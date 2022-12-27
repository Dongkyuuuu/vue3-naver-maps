<script setup lang="ts">
import { onMounted, onUnmounted, ref, toRefs } from "vue";
import { useLoad } from "@/composables/useLoad";
import { addEventGroundOverlay } from "@/composables/useEvent";
import { UI_EVENT_GROUNDOVERLAY } from "@/constants/events";

const emits = defineEmits([...UI_EVENT_GROUNDOVERLAY, "onLoad"]);
const props = defineProps<{
  url: string;
  bounds: naver.maps.Bounds | naver.maps.BoundsLiteral;
  options?: naver.maps.GroundOverlayOptions;
}>();

const { url, bounds, options } = toRefs(props);
const groundOverlay = ref<naver.maps.GroundOverlay>();

/** Setup groundOverlay Instnace */
const useInitGroundOverlay = (map: naver.maps.Map) => {
  groundOverlay.value = new window.naver.maps.GroundOverlay(
    url.value,
    bounds.value,
    {
      map: map,
      ...options?.value,
    }
  );

  addEventGroundOverlay(emits, groundOverlay.value);
  emits("onLoad", groundOverlay.value);
};

onMounted(() => useLoad(useInitGroundOverlay));
onUnmounted(() => groundOverlay.value && groundOverlay.value.setMap(null));
</script>

<template>
  <div></div>
</template>
