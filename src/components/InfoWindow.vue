<template>
  <div style="display: none">
    <div ref="infoWindowRef">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  inject,
  watchEffect,
  PropType,
  toRefs,
  onUnmounted,
  onMounted,
  watch,
} from "vue";
import { naverMapObject } from "../injectionKeys";

export default defineComponent({
  name: "InfoWindow",
  emits: ["onLoad"],
  props: {
    marker: {
      type: Object as PropType<naver.maps.Marker | undefined>,
      required: true,
    },
    isOpen: { type: Boolean, default: false },
    options: {
      type: Object as PropType<naver.maps.InfoWindowOptions>,
      default: {},
    },
  },
  setup: (props, { emit }) => {
    const map = inject(naverMapObject)!;
    const infoWindow = ref<naver.maps.InfoWindow>();
    const infoWindowRef = ref<HTMLDivElement>();
    const { marker, options, isOpen } = toRefs(props);

    const statusInfoWindow = (open: boolean) => {
      if (!infoWindow.value) return;

      if (open) infoWindow.value!.open(map.value!, marker.value!);
      else infoWindow.value!.close();
    };
    const createInfoWindow = () => {
      infoWindow.value = new window.naver.maps.InfoWindow({
        content: infoWindowRef.value!,
        ...options,
      });

      statusInfoWindow(isOpen.value);
      emit("onLoad", infoWindow.value!);
    };

    onMounted(() => {
      /**
       * create Watch
       */
      watchEffect(() => {
        if (!map.value || !marker.value) return;
        if (!infoWindow.value) createInfoWindow();
      });

      /**
       * render Watch
       */
      watch(
        () => isOpen.value,
        (newVal, oldVal) => {
          statusInfoWindow(newVal);
        },
        { immediate: false }
      );
    });
    onUnmounted(() => infoWindow.value!.setMap(null));

    return {
      infoWindowRef,
    };
  },
});
</script>
