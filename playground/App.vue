<script setup lang="ts">
import { NaverMap, NaverMarker } from "~/src";
import type {} from "~/src";
</script>

<template>
  <NaverMap style="width: 90vw; height: 80vh">
    <NaverMarker
      :latitude="37.566616443521745"
      :longitude="126.97837068565364"
    />
  </NaverMap>
</template>

<style scoped></style>
