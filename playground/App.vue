<script setup lang="ts">
import { ref } from "vue";
import { NaverMap, NaverMarker, NaverInfoWindow, NaverCircle } from "~/src";

const marker = ref();
</script>

<template>
  <NaverMap style="width: 90vw; height: 80vh">
    <NaverMarker
      :latitude="37.566616443521745"
      :longitude="126.97837068565364"
      @on-load="marker = $event"
    />
    <NaverInfoWindow :marker="marker" :open="true">
      Hello, Infowindow!
    </NaverInfoWindow>

    <NaverCircle
      :latitude="37.566616443521745"
      :longitude="126.97837068565364"
    />
  </NaverMap>
</template>

<style scoped></style>
