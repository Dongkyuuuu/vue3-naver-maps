<script lang="ts" setup>
import { ref, onMounted, onUnmounted, toRefs } from "vue";
import { addEventEllipse } from "@/composables/useEvent";
import { UI_EVENT_ELLIPSE } from "@/assets/event";
import { mapInstance, mapsCallbackList } from "@/store";

const props = defineProps<{
  bounds: naver.maps.Bounds | naver.maps.BoundsLiteral;
  options?: naver.maps.EllipseOptions;
}>();
const emits = defineEmits(["onLoad", ...UI_EVENT_ELLIPSE]);

const { bounds, options } = toRefs(props);
const ellipse = ref<naver.maps.Ellipse>();

const getEllipseInstance = (map: naver.maps.Map) => {
  const ellipseOption = {
    map: map,
    bounds: bounds.value,
  };
  ellipse.value = new naver.maps.Ellipse(
    Object.assign(ellipseOption, options?.value ?? {})
  );

  addEventEllipse(emits, ellipse.value);
  emits("onLoad", ellipse.value);
};

onMounted(() =>
  window.naver
    ? getEllipseInstance(mapInstance.value!)
    : mapsCallbackList.value.push(getEllipseInstance)
);
onUnmounted(() => ellipse.value!.setMap(null));
</script>

<template></template>
