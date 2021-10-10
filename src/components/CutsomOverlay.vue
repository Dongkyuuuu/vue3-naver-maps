<template>
  <div style="display: none">
    <div ref="customOverlayRef">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  toRefs,
  watchEffect,
  inject,
} from "vue";
import { naverMapObject } from "../injectionKeys";
import { naverV3 } from "../types";

export default defineComponent({
  name: "GroundOverlay",
  emits: ["onLoad"],
  props: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  setup: (props, { emit }) => {
    const map = inject(naverMapObject)!;
    const customOverlay = ref<naver.maps.OverlayView>();
    const customOverlayRef = ref<HTMLDivElement>();
    const { latitude, longitude } = toRefs(props);

    const createCustomOverlay = () => {
      class classCustomOverlay extends naver.maps.OverlayView {
        _element: HTMLDivElement | undefined;
        _position: naver.maps.LatLng;
        constructor(options: naverV3.customOverlayOptions) {
          super();
          this._element = options.content;
          this._position = options.position;
          this.draw();
          this.setMap(options.map);
        }

        getPosition() {
          return this._position;
        }
        onAdd() {
          const overlayLayer = this.getPanes().overlayLayer;
          overlayLayer.appendChild(this._element!);
        }
        draw() {
          if (!this.getMap()) return;
          const projection = this.getProjection();
          const position = this.getPosition();
          const { x, y } = projection.fromCoordToOffset(position) as any;

          this._element!.style.left = `${x}px`;
          this._element!.style.top = `${y}px`;
          this._element!.style.position = "absolute";
        }
        onRemove() {
          this._element!.parentNode!.removeChild(this._element!);
          this.setMap(null);
        }
      }

      customOverlay.value = new classCustomOverlay({
        map: map.value!,
        position: new window.naver.maps.LatLng(latitude.value, longitude.value),
        content: customOverlayRef.value!,
      });
      emit("onLoad", customOverlay.value);
    };

    onMounted(() => {
      watchEffect(() => {
        if (!map.value || !customOverlayRef.value!.innerHTML) return;
        customOverlay.value ? "" : createCustomOverlay();
      });
    });

    onUnmounted(() => customOverlay.value!.setMap(null));

    return {
      customOverlayRef,
    };
  },
});
</script>
