<script setup lang="ts">
import { ref } from "vue";
import { NaverMap, NaverMarker, NaverInfoWindow } from "~/src";
import type {} from "~/src";

const marker = ref();
</script>

<template>
  <NaverMap style="width: 90vw; height: 80vh">
    <NaverMarker
      :latitude="37.566616443521745"
      :longitude="126.97837068565364"
      @on-load="marker = $event"
    />

    <NaverInfoWindow
      :marker="marker"
      :open="true"
      :options="{
        content: 'asdsd',
      }"
    >
      <!-- Hello, Infowindow! -->
    </NaverInfoWindow>
  </NaverMap>
</template>

<style scoped></style>
