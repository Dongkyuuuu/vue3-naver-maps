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
import { UI_EVENT_CIRCLE, addEventCircle } from "../utils";

export default defineComponent({
  name: "Circle",
  emits: [...UI_EVENT_CIRCLE, "onLoad"],
  props: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    radius: { type: Number, default: 0 },
    options: {
      type: Object as PropType<naver.maps.CircleOptions>,
      default: {},
    },
  },
  setup: (props, { emit }) => {
    const map = inject(naverMapObject)!;
    const circle = ref<naver.maps.Circle>();
    const { latitude, longitude, radius, options } = toRefs(props);

    const createCircle = () => {
      circle.value = new window.naver.maps.Circle(
        Object.assign(
          {
            map: map.value!,
            center: new window.naver.maps.LatLng(
              latitude.value,
              longitude.value
            ),
            radius: radius.value,
          },
          options.value
        )
      );

      addEventCircle(emit, circle.value);
      emit("onLoad", circle.value);
    };
    const setCircle = (newOptions: naver.maps.CircleOptions) => {
      circle.value!.setOptions(newOptions);
    };

    onMounted(() => {
      watchEffect(() => {
        const newOptions = options.value;
        if (!map.value) return;
        circle.value ? setCircle(newOptions) : createCircle();
      });
    });
    onUnmounted(() => circle.value!.setMap(null));
  },
});
</script>
