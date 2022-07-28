<script lang="ts" setup>
import { ref, onMounted, onUnmounted, toRefs } from "vue";
import { addEventPolyline } from "@/composables/useEvent";
import { UI_EVENT_POLYLINE } from "@/assets/event";
import { mapInstance, mapsCallbackList } from "@/store";

const props = defineProps<{
  path:
    | naver.maps.ArrayOfCoords
    | naver.maps.KVOArrayOfCoords
    | naver.maps.ArrayOfCoordsLiteral;
  options?: naver.maps.PolylineOptions;
}>();
const emits = defineEmits(["onLoad", ...UI_EVENT_POLYLINE]);

const { path, options } = toRefs(props);
const polyline = ref<naver.maps.Polyline>();

const getPolylineInstance = (map: naver.maps.Map) => {
  polyline.value = new window.naver.maps.Polyline(
    Object.assign({ map: map, path: path.value }, options?.value ?? {})
  );

  addEventPolyline(emits, polyline.value);
  emits("onLoad", polyline.value);
};

onMounted(() =>
  window.naver
    ? getPolylineInstance(mapInstance.value!)
    : mapsCallbackList.value.push(getPolylineInstance)
);
onUnmounted(() => polyline.value!.setMap(null));
</script>

<template></template>
