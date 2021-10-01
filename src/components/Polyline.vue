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
import { UI_EVENT_POLYLINE, addEventPolyline } from "../utils";

export default defineComponent({
  name: "Polyline",
  emits: [...UI_EVENT_POLYLINE, "onLoad"],
  props: {
    path: {
      type: Array as PropType<naver.maps.ArrayOfCoordsLiteral>,
      required: true,
    },
    options: {
      type: Object as PropType<naver.maps.PolylineOptions>,
      default: {},
    },
  },
  setup: (props, { emit }) => {
    const map = inject(naverMapObject)!;
    const polyline = ref<naver.maps.Polyline>();
    const { options, path } = toRefs(props);

    const createPolygon = () => {
      polyline.value = new window.naver.maps.Polyline(
        Object.assign(
          {
            map: map.value,
            path: path.value,
          },
          options.value
        )
      );

      addEventPolyline(emit, polyline.value);
      emit("onLoad", polyline.value);
    };

    const setPolygon = (newOptions: naver.maps.PolylineOptions) => {
      polyline.value!.setOptions(newOptions);
    };

    onMounted(() => {
      watchEffect(() => {
        const newOptions = options.value;
        if (!map.value) return;
        polyline.value ? setPolygon(newOptions) : createPolygon();
      });
    });

    onUnmounted(() => polyline.value!.setMap(null));
  },
});
</script>
