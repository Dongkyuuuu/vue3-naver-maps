<script lang="ts" setup>
import { ref, onMounted, onUnmounted, toRefs } from "vue";
import { addEventGroundOverlay } from "@/composables/useEvent";
import { UI_EVENT_GROUNDOVERLAY } from "@/assets/event";
import { mapInstance, mapsCallbackList } from "@/store";

const props = defineProps<{
  url: string;
  bounds: naver.maps.Bounds | naver.maps.BoundsLiteral;
  options?: naver.maps.GroundOverlayOptions;
}>();
const emits = defineEmits(["onLoad", ...UI_EVENT_GROUNDOVERLAY]);

const { bounds, url, options } = toRefs(props);
const groundOverlay = ref<naver.maps.GroundOverlay>();

const getGroundOverlayInstance = (map: naver.maps.Map) => {
  groundOverlay.value = new naver.maps.GroundOverlay(
    url.value,
    bounds.value,
    Object.assign({ map: map }, options?.value ?? {})
  );

  addEventGroundOverlay(emits, groundOverlay.value);
  emits("onLoad", groundOverlay.value);
};

onMounted(() =>
  window.naver
    ? getGroundOverlayInstance(mapInstance.value!)
    : mapsCallbackList.value.push(getGroundOverlayInstance)
);
onUnmounted(() => groundOverlay.value!.setMap(null));
</script>

<template></template>
