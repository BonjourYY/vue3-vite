<script setup>
import { reactive } from 'vue';
import Pagination from '@/components/Pagination.vue';

const response = await fetch('/data/works/sort/query/front', { method: 'GET' });
const result = await response.json();
console.log(result);
const mode = reactive({
  env: import.meta.env,
});
console.log(mode.env);
</script>

<template>
  <p>{{ mode.env }}</p>
  <Pagination />
</template>

<style lang="scss" scoped></style>
