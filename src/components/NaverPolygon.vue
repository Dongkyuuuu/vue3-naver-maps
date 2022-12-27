<script setup lang="ts">
import { onMounted, onUnmounted, ref, toRefs } from "vue";
import { useLoad } from "@/composables/useLoad";
import { addEventPolygon } from "@/composables/useEvent";
import { UI_EVENT_POLYGON } from "@/constants/events";

const emits = defineEmits([...UI_EVENT_POLYGON, "onLoad"]);
const props = defineProps<{
  paths:
    | naver.maps.ArrayOfCoords[]
    | naver.maps.KVOArrayOfCoords[]
    | naver.maps.ArrayOfCoordsLiteral;
  options?: naver.maps.PolygonOptions;
}>();

const { paths, options } = toRefs(props);
const polygon = ref<naver.maps.Polygon>();

/** Setup polygon Instnace */
const useInitPolygon = (map: naver.maps.Map) => {
  polygon.value = new window.naver.maps.Polygon({
    map: map,
    paths: paths.value as any,
    ...options?.value,
  });

  addEventPolygon(emits, polygon.value);
  emits("onLoad", polygon.value);
};

onMounted(() => useLoad(useInitPolygon));
onUnmounted(() => polygon.value && polygon.value.setMap(null));
</script>

<template>
  <div></div>
</template>
