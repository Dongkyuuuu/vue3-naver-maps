<script lang="ts" setup>
import { ref, inject, onMounted, onUnmounted, toRefs } from "vue";
import { addEventRectangle } from "@/composables/useEvent";
import { UI_EVENT_RECTANGLE } from "@/assets/event";
import { MAPS_INSTANCE } from "@/config/keys";

const props = defineProps<{
  bounds: naver.maps.Bounds | naver.maps.BoundsLiteral;
  options?: naver.maps.RectangleOptions;
}>();
const emits = defineEmits(["onLoad", ...UI_EVENT_RECTANGLE]);

const { bounds, options } = toRefs(props);
const map = inject(MAPS_INSTANCE)!;
const rectangle = ref<naver.maps.Rectangle>();

const getRectangleInstance = () => {
  rectangle.value = new window.naver.maps.Rectangle(
    Object.assign(
      { map: map.value, bounds: bounds.value },
      options?.value ?? {}
    )
  );

  addEventRectangle(emits, rectangle.value);
  emits("onLoad", rectangle.value);
};

onMounted(() => getRectangleInstance());
onUnmounted(() => rectangle.value!.setMap(null));
</script>

<template></template>

<script lang="ts">
// import {
//   defineComponent,
//   PropType,
//   inject,
//   ref,
//   toRefs,
//   onMounted,
//   onUnmounted,
//   watchEffect,
// } from "vue";
// import { naverMapObject } from "../injectionKeys";
// import { UI_EVENT_RECTANGLE, addEventRectangle } from "../utils";

// export default defineComponent({
//   name: "Rectangle",
//   emits: [...UI_EVENT_RECTANGLE, "onLoad"],
//   props: {
//     bounds: {
//       type: Object as PropType<naver.maps.Bounds | naver.maps.BoundsLiteral>,
//       required: true,
//     },
//     options: {
//       type: Object as PropType<naver.maps.RectangleOptions>,
//       default: {},
//     },
//   },
//   setup: (props, { emit }) => {
//     const map = inject(naverMapObject)!;
//     const rectangle = ref<naver.maps.Rectangle>();
//     const { bounds, options } = toRefs(props);

//     const createRectangle = () => {
//       rectangle.value = new window.naver.maps.Rectangle(
//         Object.assign(
//           {
//             map: map.value!,
//             bounds: bounds.value,
//           },
//           options.value
//         )
//       );

//       addEventRectangle(emit, rectangle.value);
//       emit("onLoad", rectangle.value);
//     };
//     const setRectangle = (newOptions: naver.maps.RectangleOptions) => {
//       rectangle.value!.setOptions(newOptions);
//     };

//     onMounted(() => {
//       watchEffect(() => {
//         const newOptions = options.value;
//         if (!map.value) return;
//         rectangle.value ? setRectangle(newOptions) : createRectangle();
//       });
//     });
//     onUnmounted(() => rectangle.value!.setMap(null));
//   },
// });
</script>
