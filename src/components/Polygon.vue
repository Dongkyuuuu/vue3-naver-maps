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
import { UI_EVENT_POLYGON, addEventPolygon } from "../utils";

export default defineComponent({
  name: "Polygon",
  emits: [...UI_EVENT_POLYGON, "onLoad"],
  props: {
    paths: {
      type: Array as PropType<naver.maps.ArrayOfCoordsLiteral>,
      required: true,
    },
    options: {
      type: Object as PropType<naver.maps.PolygonOptions>,
      default: {},
    },
  },
  setup: (props, { emit }) => {
    const map = inject(naverMapObject)!;
    const polygon = ref<naver.maps.Polygon>();
    const { options, paths } = toRefs(props);

    const createPolygon = () => {
      polygon.value = new window.naver.maps.Polygon(
        Object.assign(
          {
            map: map.value,
            paths: paths.value,
          },
          options.value
        )
      );

      addEventPolygon(emit, polygon.value);
      emit("onLoad", polygon.value);
    };

    const setPolygon = (newOptions: naver.maps.PolygonOptions) => {
      polygon.value!.setOptions(newOptions);
    };

    onMounted(() => {
      watchEffect(() => {
        const newOptions = options.value;
        if (!map.value) return;
        polygon.value ? setPolygon(newOptions) : createPolygon();
      });
    });

    onUnmounted(() => polygon.value!.setMap(null));
  },
});
</script>
