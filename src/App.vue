<script setup>
import { ref } from 'vue';
const attributeName = ref('class');
</script>

<template>
  <p :[`foo${attributeName}`]="'text'">Hello World!</p>
</template>

<style scoped></style>
