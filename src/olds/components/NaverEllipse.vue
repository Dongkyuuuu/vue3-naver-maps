<script setup lang="ts">
import { onMounted, onUnmounted, ref, toRefs } from "vue";
import { addEventEllipse } from "@/composables/useEvent";
import { useLoad } from "@/composables/useLoad";
import { UI_EVENT_ELLIPSE } from "@/constants/events";

const emits = defineEmits([...UI_EVENT_ELLIPSE, "onLoad"]);
const props = defineProps<{
  bounds: naver.maps.Bounds | naver.maps.BoundsLiteral;
  options?: naver.maps.EllipseOptions;
}>();

const { bounds, options } = toRefs(props);
const ellipse = ref<naver.maps.Ellipse>();

/** Setup Ellipse Instnace */
const useInitEllipse = (map: naver.maps.Map) => {
  ellipse.value = new window.naver.maps.Ellipse({
    map: map,
    bounds: bounds.value,
    ...options?.value,
  });

  addEventEllipse(emits, ellipse.value);
  emits("onLoad", ellipse.value);
};

onMounted(() => useLoad(useInitEllipse));
onUnmounted(() => ellipse.value && ellipse.value.setMap(null));
</script>

<template>
  <div></div>
</template>
