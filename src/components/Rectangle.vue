<template></template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  inject,
  ref,
  toRefs,
  onMounted,
  onUnmounted,
  watchEffect,
} from "vue";
import { naverMapObject } from "../injectionKeys";
import { UI_EVENT_RECTANGLE, addEventRectangle } from "../utils";

export default defineComponent({
  name: "Rectangle",
  emits: [...UI_EVENT_RECTANGLE, "onLoad"],
  props: {
    bounds: {
      type: Object as PropType<naver.maps.Bounds | naver.maps.BoundsLiteral>,
      required: true,
    },
    options: {
      type: Object as PropType<naver.maps.RectangleOptions>,
      default: {},
    },
  },
  setup: (props, { emit }) => {
    const map = inject(naverMapObject)!;
    const rectangle = ref<naver.maps.Rectangle>();
    const { bounds, options } = toRefs(props);

    const createRectangle = () => {
      rectangle.value = new window.naver.maps.Rectangle(
        Object.assign(
          {
            map: map.value!,
            bounds: bounds.value,
          },
          options.value
        )
      );

      addEventRectangle(emit, rectangle.value);
      emit("onLoad", rectangle.value);
    };
    const setRectangle = (newOptions: naver.maps.RectangleOptions) => {
      rectangle.value!.setOptions(newOptions);
    };

    onMounted(() => {
      watchEffect(() => {
        const newOptions = options.value;
        if (!map.value) return;
        rectangle.value ? setRectangle(newOptions) : createRectangle();
      });
    });
    onUnmounted(() => rectangle.value!.setMap(null));
  },
});
</script>
