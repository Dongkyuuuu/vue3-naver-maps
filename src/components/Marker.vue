<template>
  <div>
    <slot></slot>
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
} from "vue";
import { naverMapObject, addEventMarker, UI_EVENT } from "../utils";
import type { naverV3 } from "../types";

export default defineComponent({
  name: "Marker",
  emits: ["onLoad", ...UI_EVENT],
  props: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    htmlIcon: {
      type: Object as PropType<naverV3.htmlIcon>,
      default: { size: { width: 0, height: 0 }, anchor: { x: 0, y: 0 } },
    },
  },
  setup: (props, { emit, slots }) => {
    const { latitude, longitude, htmlIcon } = toRefs(props);
    const marker = ref<naver.maps.Marker | null>(null);
    const map = inject(naverMapObject)!;

    const createIcon = (): naver.maps.HtmlIcon | null => {
      if (typeof slots.default === "undefined") return null;
      //@ts-ignore
      const icon = slots.default()[0].el.parentElement;

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

    watchEffect(() => {
      if (!map.value) return;
      const position: naver.maps.LatLng = new window.naver.maps.LatLng(
        latitude.value,
        longitude.value
      );
      marker.value ? changeMarker(position) : createMarker(position);
    });

    onUnmounted(() => marker.value!.setMap(null));
  },
});
</script>
