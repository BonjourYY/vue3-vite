<script setup>
import { ref } from 'vue';

// const valueObj = ref({
//   titleValue: null,
//   nameValue: null,
// });

const titleValue = ref(null);
const nameValue = ref(null);
</script>

<template>
  <BlogPost v-model:title="titleValue" v-model:name="nameValue"></BlogPost>
  <p>{{ titleValue }}</p>
  <p>{{ nameValue }}</p>
</template>

<style scoped></style>
