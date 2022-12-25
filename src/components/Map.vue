<script setup lang="ts">
import { onMounted, onUnmounted, ref, useAttrs } from "vue";
import { useSetupScript } from "@/composables/useSetup";

const attrs = useAttrs();
const mapElement = ref<HTMLDivElement>();

const useInitMap = () => {};

onMounted(() => {});
onUnmounted(() => {});
</script>

<template>
  <div ref="mapElement" v-bind="attrs">
    <slot />
  </div>
</template>
