<script lang="ts" setup>
import { ref } from "vue";
import { NaverMaps, NaverMarker } from "vue3-naver-maps";

const isRender = ref(false);
</script>

<template>
  <button @click="isRender = !isRender">odk</button>
  <naver-maps style="width: 100%; height: 400px">
    <naver-marker
      :latitude="37.566616443521745"
      :longitude="126.97837068565364"
    >
      <div v-if="isRender">render!</div>
      <div v-else>noRender</div>
    </naver-marker>
  </naver-maps>
</template>
