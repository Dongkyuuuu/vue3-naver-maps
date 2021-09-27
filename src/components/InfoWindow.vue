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
import { addEventInfoWindow, UI_EVENT_INFOWINDOW } from "../utils";
import { naverMapObject } from "../injectionKeys";

export default defineComponent({
  name: "InfoWindow",
  emits: ["onLoad", ...UI_EVENT_INFOWINDOW],
  props: {
    marker: {
      type: Object as PropType<naver.maps.Marker>,
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
      if (open) infoWindow.value!.open(map.value!, marker!.value!);
      else infoWindow.value!.close();
    };
    const createInfoWindow = () => {
      infoWindow.value = new window.naver.maps.InfoWindow(
        Object.assign(
          {
            content: infoWindowRef.value!.innerHTML,
          },
          options.value
        )
      );

      /**
       * add Infowindow Event
       */
      addEventInfoWindow(emit, infoWindow.value);
      emit("onLoad", infoWindow.value!);
      statusInfoWindow(isOpen.value);
    };

    onMounted(() => {
      /**
       * create Watch
       */
      watchEffect(() => {
        if (!map.value || !marker!.value) return;
        createInfoWindow();
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
