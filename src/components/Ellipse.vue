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
import { UI_EVENT_ELLIPSE, addEventEllipse } from "../utils";

export default defineComponent({
  name: "Ellpise",
  emits: [...UI_EVENT_ELLIPSE, "onLoad"],
  props: {
    bounds: {
      type: Object as PropType<naver.maps.Bounds | naver.maps.BoundsLiteral>,
      required: true,
    },
    options: {
      type: Object as PropType<naver.maps.EllipseOptions>,
      default: {},
    },
  },
  setup: (props, { emit }) => {
    const map = inject(naverMapObject)!;
    const ellipse = ref<naver.maps.Ellipse>();
    const { bounds, options } = toRefs(props);

    const createEllipse = () => {
      ellipse.value = new window.naver.maps.Ellipse(
        Object.assign(
          {
            map: map.value!,
            bounds: bounds.value,
          },
          options.value
        )
      );

      addEventEllipse(emit, ellipse.value);
      emit("onLoad", ellipse.value);
    };
    const setEllipse = (newOptions: naver.maps.EllipseOptions) => {
      ellipse.value!.setOptions(newOptions);
    };

    onMounted(() => {
      watchEffect(() => {
        const newOptions = options.value;
        if (!map.value) return;
        ellipse.value ? setEllipse(newOptions) : createEllipse();
      });
    });
    onUnmounted(() => ellipse.value!.setMap(null));
  },
});
</script>
