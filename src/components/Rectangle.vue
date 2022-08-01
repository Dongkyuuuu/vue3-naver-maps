<script lang="ts" setup>
import { ref, onMounted, onUnmounted, toRefs } from "vue";
import { addEventRectangle } from "@/composables/useEvent";
import { UI_EVENT_RECTANGLE } from "@/assets/event";
import { mapsCallbackList } from "@/store";

const props = defineProps<{
  bounds: naver.maps.Bounds | naver.maps.BoundsLiteral;
  options?: naver.maps.RectangleOptions;
}>();
const emits = defineEmits(["onLoad", ...UI_EVENT_RECTANGLE]);

const { bounds, options } = toRefs(props);
const rectangle = ref<naver.maps.Rectangle>();

const getRectangleInstance = (map: naver.maps.Map) => {
  rectangle.value = new window.naver.maps.Rectangle(
    Object.assign({ map: map, bounds: bounds.value }, options?.value ?? {})
  );

  addEventRectangle(emits, rectangle.value);
  emits("onLoad", rectangle.value);
};

onMounted(() => mapsCallbackList.value.push(getRectangleInstance));
onUnmounted(() => rectangle.value!.setMap(null));
</script>

<template></template>
