<template>
  <div class="render-map">
    <TestMap v-if="!isMobile" />
    <ControlMobile v-if="isMobile" />
  </div>
</template>

<script setup>
import TestMap from '@/components/TestMap.vue';
import ControlMobile from '@/components/ControlMobile.vue';
import { useDevice } from '@/composables/useDevice';

const { isMobile } = useDevice();
</script>

<style scoped>
.render-map {
  position: relative;
}
</style>
