<template>
  <div style="display: none">
    <div ref="markerRef">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onUnmounted,
  inject,
  watchEffect,
  toRefs,
  PropType,
  onMounted,
} from "vue";
import { addEventMarker, UI_EVENT_OBJECT } from "../utils";
import { naverMapObject } from "../injectionKeys";
import type { naverV3 } from "../types";

export default defineComponent({
  name: "Marker",
  emits: ["onLoad", ...UI_EVENT_OBJECT],
  props: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    htmlIcon: {
      type: Object as PropType<naverV3.htmlIcon>,
      default: { size: { width: 0, height: 0 }, anchor: { x: 0, y: 0 } },
    },
  },
  setup: (props, { emit, slots }) => {
    const map = inject(naverMapObject)!;
    const marker = ref<naver.maps.Marker>();
    const markerRef = ref<HTMLDivElement>();
    const { latitude, longitude, htmlIcon } = toRefs(props);

    const createIcon = (): naver.maps.HtmlIcon | null => {
      const icon = markerRef.value?.innerHTML;
      if (!icon) return null;

      return {
        content: icon,
        size: new window.naver.maps.Size(
          htmlIcon.value.size.width || 0,
          htmlIcon.value.size.height || 0
        ),
        anchor: new window.naver.maps.Point(
          htmlIcon.value.anchor.x || 0,
          htmlIcon.value.anchor.y || 0
        ),
      } as naver.maps.HtmlIcon;
    };

    const createMarker = (position: naver.maps.LatLng) => {
      marker.value = new window.naver.maps.Marker({
        map: map.value!,
        position: position,
      });
      // set htmlIcon
      createIcon() ? marker.value.setIcon(createIcon()!) : "";
      // add marker UI event
      addEventMarker(emit, marker.value);
      emit("onLoad", marker.value);
    };

    const changeMarker = (position: naver.maps.LatLng) => {
      marker.value!.setPosition(position);
    };

    onMounted(() => {
      watchEffect(() => {
        if (!map.value) return;
        const position: naver.maps.LatLng = new window.naver.maps.LatLng(
          latitude.value,
          longitude.value
        );
        marker.value ? changeMarker(position) : createMarker(position);
      });
    });
    onUnmounted(() => marker.value!.setMap(null));

    return {
      markerRef,
    };
  },
});
</script>
