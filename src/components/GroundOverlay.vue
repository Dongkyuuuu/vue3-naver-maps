<script lang="ts" setup>
import { ref, inject, onMounted, onUnmounted, toRefs } from "vue";
import { addEventGroundOverlay } from "@/composables/useEvent";
import { UI_EVENT_GROUNDOVERLAY } from "@/assets/event";
import { MAPS_INSTANCE } from "@/config/keys";

const props = defineProps<{
  url: string;
  bounds: naver.maps.Bounds | naver.maps.BoundsLiteral;
  options?: naver.maps.GroundOverlayOptions;
}>();
const emits = defineEmits(["onLoad", ...UI_EVENT_GROUNDOVERLAY]);

const { bounds, url, options } = toRefs(props);
const map = inject(MAPS_INSTANCE)!;
const groundOverlay = ref<naver.maps.GroundOverlay>();

const getGroundOverlayInstance = () => {
  groundOverlay.value = new naver.maps.GroundOverlay(
    url.value,
    bounds.value,
    Object.assign({ map: map.value }, options?.value ?? {})
  );

  addEventGroundOverlay(emits, groundOverlay.value);
  emits("onLoad", groundOverlay.value);
};

onMounted(() => getGroundOverlayInstance());
onUnmounted(() => groundOverlay.value!.setMap(null));
</script>

<template></template>
