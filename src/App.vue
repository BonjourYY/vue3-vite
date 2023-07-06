<script setup>
import { ref } from "vue";
import RoycoSwitch from "./components/RoycoSwitch.vue";

const result = ref(false);
</script>

<template>
  <RoycoSwitch v-model="result"></RoycoSwitch>
  {{ result }}
</template>

<style scoped></style>
