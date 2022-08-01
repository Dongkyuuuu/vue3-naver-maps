<script lang="ts" setup>
import { ref, onMounted, onUnmounted, toRefs } from "vue";
import { addEventPolygon } from "@/composables/useEvent";
import { UI_EVENT_POLYGON } from "@/assets/event";
import { useLoad } from "@/composables/useLoad";

const props = defineProps<{
  paths:
    | naver.maps.ArrayOfCoords
    | naver.maps.KVOArrayOfCoords
    | naver.maps.ArrayOfCoordsLiteral;
  options?: naver.maps.PolygonOptions;
}>();
const emits = defineEmits(["onLoad", ...UI_EVENT_POLYGON]);

const { paths, options } = toRefs(props);
const polygon = ref<naver.maps.Polygon>();

const getPolygonInstance = (map: naver.maps.Map) => {
  polygon.value = new window.naver.maps.Polygon(
    Object.assign({ map: map, paths: paths.value }, options?.value ?? {})
  );

  addEventPolygon(emits, polygon.value);
  emits("onLoad", polygon.value);
};

onMounted(() => useLoad(getPolygonInstance));
onUnmounted(() => polygon.value!.setMap(null));
</script>

<template></template>
