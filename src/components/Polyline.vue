<script lang="ts" setup>
import { ref, inject, onMounted, onUnmounted, toRefs } from "vue";
import { addEventPolyline } from "@/composables/useEvent";
import { UI_EVENT_POLYLINE } from "@/assets/event";
import { MAPS_INSTANCE } from "@/config/keys";

const props = defineProps<{
  path:
    | naver.maps.ArrayOfCoords
    | naver.maps.KVOArrayOfCoords
    | naver.maps.ArrayOfCoordsLiteral;
  options?: naver.maps.PolylineOptions;
}>();
const emits = defineEmits(["onLoad", ...UI_EVENT_POLYLINE]);

const { path, options } = toRefs(props);
const map = inject(MAPS_INSTANCE)!;
const polyline = ref<naver.maps.Polyline>();

const getPolylineInstance = () => {
  polyline.value = new window.naver.maps.Polyline(
    Object.assign({ map: map.value, path: path.value }, options?.value ?? {})
  );

  addEventPolyline(emits, polyline.value);
  emits("onLoad", polyline.value);
};

onMounted(() => getPolylineInstance());
onUnmounted(() => polyline.value!.setMap(null));
</script>

<template></template>
