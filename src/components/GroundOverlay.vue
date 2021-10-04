<template></template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted,
  PropType,
  ref,
  toRefs,
  watchEffect,
  inject,
} from "vue";
import { naverMapObject } from "../injectionKeys";
import { UI_EVENT_GROUNDOVERLAY, addEventGroundOverlay } from "../utils";

export default defineComponent({
  name: "GroundOverlay",
  emits: ["onLoad", ...UI_EVENT_GROUNDOVERLAY],
  props: {
    url: { type: String, required: true },
    bound: {
      type: Object as PropType<naver.maps.BoundsLiteral>,
      required: true,
    },
    options: {
      type: Object as PropType<naver.maps.GroundOverlayOptions>,
      default: {},
    },
  },
  setup: (props, { emit }) => {
    const map = inject(naverMapObject)!;
    const groundOverlay = ref<naver.maps.GroundOverlay>();
    const { url, bound, options } = toRefs(props);

    const createGroundOverlay = () => {
      groundOverlay.value = new window.naver.maps.GroundOverlay(
        url.value!,
        bound.value!,
        Object.assign({ map: map.value! }, options.value)
      );

      addEventGroundOverlay(emit, groundOverlay.value);
      emit("onLoad", groundOverlay.value);
    };
    const setGroundOverlay = (newOptions: naver.maps.GroundOverlayOptions) => {
      groundOverlay.value!.setOpacity(
        newOptions.opacity ? newOptions.opacity : 0
      );
    };

    onMounted(() => {
      watchEffect(() => {
        const newOptions = options.value;
        if (!map.value) return;

        groundOverlay.value
          ? setGroundOverlay(newOptions)
          : createGroundOverlay();
      });
    });
    onUnmounted(() => groundOverlay.value!.setMap(null));
  },
});
</script>
