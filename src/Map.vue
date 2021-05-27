<template>
  <div id="vue-naver-maps" :style="mapStyle">
    <slot> </slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs, ref } from "vue";

export default defineComponent({
  name: "Map",
  props: {
    width: { type: Number, default: 100 },
    height: { type: Number, default: 100 },
    mapOptions: {
      type: Object,
      required: true,
    },
    initLayers: Array,
  },
  setup: (props, context) => {
    const { width, height } = toRefs(props);
    const map = ref<naver.maps.Map | null>(null);
    const mapStyle = {
      width: width.value,
      height: height.value,
    };

    return { mapStyle };
  },
});
</script>
