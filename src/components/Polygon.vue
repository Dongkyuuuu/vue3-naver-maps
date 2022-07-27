<script lang="ts" setup>
import { ref, inject, onMounted, onUnmounted, toRefs } from "vue";
import { addEventPolygon } from "@/composables/useEvent";
import { UI_EVENT_POLYGON } from "@/assets/event";
import { MAPS_INSTANCE } from "@/config/keys";

const props = defineProps<{
  paths:
    | naver.maps.ArrayOfCoords
    | naver.maps.KVOArrayOfCoords
    | naver.maps.ArrayOfCoordsLiteral;
  options?: naver.maps.PolygonOptions;
}>();
const emits = defineEmits(["onLoad", ...UI_EVENT_POLYGON]);

const { paths, options } = toRefs(props);
const map = inject(MAPS_INSTANCE)!;
const polygon = ref<naver.maps.Polygon>();

const getPolygonInstance = () => {
  polygon.value = new window.naver.maps.Polygon(
    Object.assign({ map: map.value, paths: paths.value }, options?.value ?? {})
  );

  addEventPolygon(emits, polygon.value);
  emits("onLoad", polygon.value);
};

onMounted(() => getPolygonInstance());
onUnmounted(() => polygon.value!.setMap(null));
</script>

<template></template>
