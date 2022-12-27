<script setup lang="ts">
import { onMounted, onUnmounted, ref, toRefs } from "vue";
import { useLoad } from "@/composables/useLoad";
import { addEventPolyline } from "@/composables/useEvent";
import { UI_EVENT_POLYLINE } from "@/constants/events";

const emits = defineEmits([...UI_EVENT_POLYLINE, "onLoad"]);
const props = defineProps<{
  path:
    | naver.maps.ArrayOfCoords[]
    | naver.maps.KVOArrayOfCoords[]
    | naver.maps.ArrayOfCoordsLiteral;
  options?: naver.maps.PolylineOptions;
}>();

const { path, options } = toRefs(props);
const polyline = ref<naver.maps.Polyline>();

/** Setup polyline Instnace */
const useInitPolyline = (map: naver.maps.Map) => {
  polyline.value = new window.naver.maps.Polyline({
    map: map,
    path: path.value as any,
    ...options?.value,
  });

  addEventPolyline(emits, polyline.value);
  emits("onLoad", polyline.value);
};

onMounted(() => useLoad(useInitPolyline));
onUnmounted(() => polyline.value && polyline.value.setMap(null));
</script>

<template>
  <div></div>
</template>
