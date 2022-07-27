<script lang="ts" setup>
import { ref, inject, onMounted, onUnmounted, toRefs } from "vue";
import { addEventEllipse } from "@/composables/useEvent";
import { UI_EVENT_ELLIPSE } from "@/assets/event";
import { MAPS_INSTANCE } from "@/config/keys";

const props = defineProps<{
  bounds: naver.maps.Bounds | naver.maps.BoundsLiteral;
  options?: naver.maps.EllipseOptions;
}>();
const emits = defineEmits(["onLoad", ...UI_EVENT_ELLIPSE]);

const { bounds, options } = toRefs(props);
const map = inject(MAPS_INSTANCE)!;
const ellipse = ref<naver.maps.Ellipse>();

const getEllipseInstance = () => {
  const ellipseOption = {
    map: map.value,
    bounds: bounds.value,
  };
  ellipse.value = new naver.maps.Ellipse(
    Object.assign(ellipseOption, options?.value ?? {})
  );

  addEventEllipse(emits, ellipse.value);
  emits("onLoad", ellipse.value);
};

onMounted(() => getEllipseInstance());
onUnmounted(() => ellipse.value!.setMap(null));
</script>

<template></template>
