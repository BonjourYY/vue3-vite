<script setup>
import { useAttrs } from 'vue';
const attrs = useAttrs();
</script>

<template>
  <div @click="$attrs.onChangeData">1231</div>
</template>

<style scoped></style>
